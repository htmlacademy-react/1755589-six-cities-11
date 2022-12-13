import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/actions';

type CitiesListComponentProps = {
  citiesList: string[];
  activeCity: string;
}

function CitiesListComponent({citiesList, activeCity}: CitiesListComponentProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCity(citiesList[0]));
  }, [dispatch, citiesList]);

  return(
    <>
      {citiesList.map((city) => <li className="locations__item" key={city} onClick={() => dispatch(setCity(city))}><Link to={''} className={`locations__item-link tabs__item tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}><span>{city}</span></Link></li>
      )}
    </>
  );
}

export default CitiesListComponent;
