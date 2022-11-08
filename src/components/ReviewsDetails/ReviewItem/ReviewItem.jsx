import { ReviewDesc, ReviewTitle } from './ReviewItem.styled';

export const ReviewItem = ({ username, desc }) => {
  return (
    <>
      <ReviewTitle>Author: {username}</ReviewTitle>
      <ReviewDesc>{desc}</ReviewDesc>
    </>
  );
};
