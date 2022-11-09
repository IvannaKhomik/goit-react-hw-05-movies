import errorImg from '../../img/ErrorPage.jpg';
import {
  StyledLink,
  BackToMainBtn,
  ErrorImg,
  Container,
} from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <BackToMainBtn>
        <StyledLink to="/">Back to Home Page</StyledLink>
      </BackToMainBtn>
      <ErrorImg src={errorImg} alt="page_not_found" />
    </Container>
  );
};
