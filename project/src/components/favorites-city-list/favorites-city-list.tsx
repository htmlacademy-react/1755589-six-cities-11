import { useAppSelector } from '../../hooks';
import FavoritesComponent from '../favorites-component/favorites-component';

function FavoritesCityList() {
  const favorites = useAppSelector((state) => state.favorites);

  return(
    <>
      {
        (favorites.map((offer) => (<li className="favorites__locations-items" key={offer.id}><div className="favorites__locations locations locations--current" ><div className="locations__item" ><a className="locations__item-link" href="#"><span>{offer.city.name}</span></a> </div></div><div className="favorites__places"> <FavoritesComponent offer={offer} /></div></li>)))
      }
    </>
  );
}

export default FavoritesCityList;
