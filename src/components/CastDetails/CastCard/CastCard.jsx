import { CastImage, CastItem, CastDesc, CastTitle } from './CastCard.styled';
import defaultImg from '../../../img/NoFound.jpg';

export const CastCard = ({ character, image, name }) => {
  const fullPath = 'https://image.tmdb.org/t/p/w500/' + image;
  return (
    <CastItem>
      <CastImage src={image ? fullPath : defaultImg} alt={name} />
      <CastTitle>{name}</CastTitle>
      <CastDesc>Character: {character}</CastDesc>
    </CastItem>
  );
};
