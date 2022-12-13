import { setRating } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { setRatingValue } from '../../store/actions';

type RatingComponentProps = {
  rateValue: number;
  checked: boolean;
}

function RatingComponent({rateValue, checked}: RatingComponentProps) {
  const dispatch = useAppDispatch();

  return(
    <>
      <input className="form__rating-input visually-hidden" checked={checked} name="rating" defaultValue={rateValue} id={`${rateValue}-stars`} type="radio"
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          dispatch(setRatingValue(+value));
        }}
      />
      <label htmlFor={`${rateValue}-stars`} className="reviews__rating-label form__rating-label" title={`${setRating(rateValue)}`}><svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg></label>
    </>
  );
}

export default RatingComponent;
