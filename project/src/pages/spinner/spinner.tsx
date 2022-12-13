import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ScaleLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
  position:'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)'
};

function Spinner() {

  return(
    <div>
      {<ClipLoader color={'#36d7b7'} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>}
    </div>
  );
}

export default Spinner;
