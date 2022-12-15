import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { getRating } from '../../utils';
import { fetchPostFavOffers } from '../../store/api-actions';
import { setFavoritesCity } from '../../store/actions';
import { useAppDispatch } from '../../hooks';

type FavoritesComponentProps = {
  offer: Offer;
}

function FavoritesComponent(props: FavoritesComponentProps) {
  const { offer } = props;
  const { isPremium, type, title, previewImage, price, rating, id} = offer;
  const dispatch = useAppDispatch();

  return(
    <article className="favorites__card place-card">
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="img" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={(evt) => {
            evt.preventDefault();
            dispatch(fetchPostFavOffers(offer));
            dispatch(setFavoritesCity(offer.city.name));
          }}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritesComponent;
