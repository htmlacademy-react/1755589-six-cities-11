import MapComponent from '../../components/map-component/map-component';
import OffersList from '../../components/offers-list/offers-list';
import { useState } from 'react';
import CitiesListComponent from '../../components/cities-list/cities-list-component';
import { CITIES_LIST } from '../../const';
import { useAppSelector } from '../../hooks';
import FilterFormComponent from '../../components/filter-form/filter-form';
import { getSortingValues } from '../../utils';


function MainPage() {
  const [ activeCard, setActiveCard ] = useState(0);
  const city = useAppSelector((state) => state.activeCity);
  let offersByCity = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === city));
  const currentValue = useAppSelector((state) => state.sortingValue);
  offersByCity = getSortingValues([...offersByCity], currentValue);

  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesListComponent citiesList={CITIES_LIST} activeCity={city}/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {city}</b>
              <FilterFormComponent currentValue={currentValue}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offersByCity} setActiveCard={setActiveCard} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {offersByCity.length > 0 && <MapComponent offers={offersByCity} activeCard={activeCard} height={800}/>}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
