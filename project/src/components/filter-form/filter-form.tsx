import { useState } from 'react';
import { SortingValues } from '../../const';
import { setSortingValue } from '../../store/actions';
import { useAppDispatch } from '../../hooks';

type FilterFormComponentProps = {
  currentValue: string;
}

function FilterFormComponent({currentValue}: FilterFormComponentProps) {
  const [ isOpened, setOpened ] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpenedSort = () => {
    setOpened(!isOpened);
  };

  const handleSortingValues = (value: string) => {
    if(value) {
      dispatch(setSortingValue(value));
    }
  };

  return(
    <form className="places__sorting" action="#" method="get" onClick={handleOpenedSort} >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} >{currentValue}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${isOpened ? '--opened' : ''}`} >
        {Object.values(SortingValues).map((value) => (<li className={`places__option places__option${currentValue === value ? '--active' : ''}`} key={value} tabIndex={0} onClick={() => handleSortingValues(value)}>{value}</li>))}
      </ul>
    </form>
  );
}

export default FilterFormComponent;
