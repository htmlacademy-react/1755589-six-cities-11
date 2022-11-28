import type { BrowserHistory } from 'history';
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

export interface HistoryRouterComponentProps {
  basename?: string;
  history: BrowserHistory;
  children?: React.ReactNode;
}

function HistoryRouterComponent({basename, history, children}: HistoryRouterComponentProps) {
  const [ state, setState ] = useState({action: history.action, location: history.location});

  useLayoutEffect(() => history.listen(setState), [history]);

  return(
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouterComponent;
