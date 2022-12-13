import { Offer } from '../../types/offer';
import { getRating } from '../../utils/index';
import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { fetchPostFavOffers } from '../../store/api-actions';
import { setFavoritesCity } from '../../store/actions';

type CardComponentProps = {
  offer: Offer;
} & HTMLAttributes<HTMLTitleElement>

function CardComponent (props: CardComponentProps) {
  const { offer, onMouseEnter, onMouseLeave } = props;
  const { id, isFavorite, isPremium, previewImage, price, rating, title, type } = offer;
  const dispatch = useAppDispatch();

  const handleIsFavorite = () => {
    dispatch(fetchPostFavOffers(offer));
    dispatch(setFavoritesCity(offer.city.name));
  };

  return(
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="img" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button place-card__bookmark-button${isFavorite ? '--active button' : ' button'}`} type="button" onClick={handleIsFavorite}><svg className="place-card__bookmark-icon" width={18} height={19}><use xlinkHref="#icon-bookmark" /></svg><span className="visually-hidden">To bookmarks</span></button>
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

export default CardComponent;
