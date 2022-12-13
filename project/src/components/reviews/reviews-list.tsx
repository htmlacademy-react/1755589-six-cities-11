import { Comment } from '../../types/comment';
import ReviewsItem from './reviews-item';

type ReviewsListProps = {
  comments: Comment[];
}

function ReviewsList({comments}: ReviewsListProps) {
  const sortedComments = [...comments].sort((comment1, comment2) => new Date(comment1.date).getTime() - new Date(comment2.date).getTime());

  return(
    <ul className="reviews__list">
      {sortedComments.map((comment) => <ReviewsItem key={comment.id} itemComment={comment}/>)}
    </ul>
  );
}

export default ReviewsList;
