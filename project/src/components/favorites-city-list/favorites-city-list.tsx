import { useAppSelector } from '../../hooks';
import FavoritesComponent from '../favorites-component/favorites-component';
import { Offer } from '../../types/offer';

function FavoritesCityList() {
  const favorites = useAppSelector((state) => state.favorites);

  const groupedOffers = Object.values(
    favorites.reduce<Record<string, Offer[]>>((acc, offer) => {
      if (!acc[offer.city.name]) {
        acc[offer.city.name] = [];
      }
      acc[offer.city.name].push(offer);
      return acc;
    }, {})
  );

  return(
    <>
      {
        groupedOffers.map((group) => (
          group.map((offer, index) => (
            <li className="favorites__locations-items" key={offer.id}>
              <div className="favorites__locations locations locations--current" >
                {index === 0 && (
                  <div className="locations__item" >
                    <a className="locations__item-link" href="#">
                      <span>{offer.city.name}</span>
                    </a>
                  </div>
                )}
              </div>
              <div className="favorites__places"><FavoritesComponent offer={offer} />
              </div>
            </li>
          ))
        ))
      }
    </>
  );
}

export default FavoritesCityList;
