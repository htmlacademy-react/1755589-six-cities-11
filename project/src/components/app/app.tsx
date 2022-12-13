import MainPage from '../../pages/main/main-page';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites/favorites-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/404/not-found-page';
import IsAuthStatusComponent from '../isAuthStatus/isAuthStatus-component';
import HistoryRouterComponent from '../history-route/history-route';
import broserHistory from '../../browser-history';
import LoginPage from '../../pages/login/login-page';

function App() {
  return(
    <HistoryRouterComponent history={broserHistory}>
      <Routes>
        <Route
          path={'*'} element={
            <NotFoundPage/>
          }
        />
        <Route
          path={'/'} element={
            <MainPage/>
          }
        />
        <Route
          path={'/login'} element={
            <LoginPage/>
          }
        />
        <Route
          path={'/favorites'} element={
            <IsAuthStatusComponent >
              <FavoritesPage />
            </IsAuthStatusComponent>
          }
        />
        <Route
          path={'/offer/:id'} element={
            <RoomPage />
          }
        />
      </Routes>
    </HistoryRouterComponent>
  );
}

export default App;
