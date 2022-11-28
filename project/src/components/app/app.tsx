import MainPage from '../../pages/main/main-page';
import { Offer } from '../../types/offer';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites/favorites-page';
import LoginPage from '../../pages/login/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/404/not-found-page';
import PrivateRouteComponent from '../private-route/private-route-component';
import { Comment } from '../../types/comment';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector } from '../../hooks';
import HistoryRouterComponent from '../history-route/history-route';
import broserHistory from '../../browser-history';

type AppProps = {
  offers: Offer[];
  comments: Comment[];
  nearbyOffers: Offer[];
}

function App({offers, comments, nearbyOffers}: AppProps) {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    <HistoryRouterComponent history={broserHistory}>
      <Routes>
        <Route
          path={'*'} element={<NotFoundPage/>}
        />
        <Route
          path={'/'} element={
            <LoadingPage>
              <MainPage/>
            </LoadingPage>
          }
        />
        <Route
          path={'/login'} element={<LoginPage/>}
        />
        <Route
          path={'/favorites'} element={
            <PrivateRouteComponent authStatus={authStatus}>
              <FavoritesPage />
            </PrivateRouteComponent>
          }
        />
        <Route
          path={'/offer/:id'} element={<RoomPage comments={comments} nearbyOffers={nearbyOffers}/>}
        />
      </Routes>
    </HistoryRouterComponent>
  );
}

export default App;
