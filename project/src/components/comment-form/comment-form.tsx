import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { INPUT_VALUES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPostCommentAction } from '../../store/api-actions';
import RatingComponent from '../rating-component/rating-component';
import { setRatingValue } from '../../store/actions';

function CommentsForm() {
  const ratingValue = useAppSelector((state) => state.ratingValue);
  const { id } = useParams<{id:string}>();
  const dispatch = useAppDispatch();

  const [ formData, setFormData ] = useState('');

  const isValid = !!formData
  && ratingValue > 0
  && formData.length > 50
  && formData.length < 300;

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if(!id) {
      return;
    }
    const postData = {comment: formData, rating: ratingValue, id: id};
    dispatch(fetchPostCommentAction(postData)).then((result) => {
      if(result.type !== 'postComment/rejected') {
        setFormData('');
      }
      dispatch(setRatingValue(0));
    }
    );
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleOnSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {INPUT_VALUES.map((number) => (<RatingComponent checked={ratingValue === number} rateValue={number} key={number}/>))}
      </div>
      <textarea onChange={(evt) => setFormData(evt.target.value)} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid} >Submit</button>
      </div>
    </form>
  );
}

export default CommentsForm;
