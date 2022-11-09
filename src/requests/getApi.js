const data = {
  API_KEY: '068c5b7ddc8b61cb20780a285eccefd7',
  URL: 'https://api.themoviedb.org/3',
  trendingUrl: 'trending',
};

export function getTrendingMovies() {
  return fetch(
    `${data.URL}/${data.trendingUrl}/all/day?api_key=${data.API_KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`The page you were trying to reach couldn't be found`)
    );
  });
}

export function getMovieDetails(movieId, searchDetails = '') {
  return fetch(
    `${data.URL}/movie/${movieId}${searchDetails}?api_key=${data.API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`The page you were trying to reach couldn't be found`)
    );
  });
}

export function getMoviesByQuery(query) {
  return fetch(
    `${data.URL}/search/movie?api_key=${data.API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`The page you were trying to reach couldn't be found`)
    );
  });
}
