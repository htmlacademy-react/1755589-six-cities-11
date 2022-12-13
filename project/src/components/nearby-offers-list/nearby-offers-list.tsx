import { Offer } from '../../types/offer';
import CardComponent from '../card-component/card-component';

type NearbyOffersListProps = {
  offers: Offer[];
}

function NearbyOffersList({offers}: NearbyOffersListProps) {
  return(
    <div className="near-places__list places__list">
      {offers.map((offer) => <CardComponent offer={offer} key={offer.id}/>)}
    </div>
  );
}

export default NearbyOffersList;
