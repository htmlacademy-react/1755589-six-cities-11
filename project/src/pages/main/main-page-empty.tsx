import { useAppSelector } from '../../hooks';

function MainPageEmpty() {
  const city = useAppSelector((state) => state.activeCity);

  return(
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
        <div className="cities__right-section">
        </div>
      </main>
    </div>
  );
}

export default MainPageEmpty;
