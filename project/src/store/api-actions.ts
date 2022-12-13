import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRouts, AuthStatuses } from '../const';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { setDataError, setDataOffers, setAuthorizationStatus, redirectToRoute, setDataComments, setDataNearbyOffers, setDataHotel, setFavoritesOffers } from './actions';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { Comment } from '../types/comment';
import { PostData } from '../types/post-data';
import { Favorite } from '../types/favorite';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(ApiRouts.Offers);
      dispatch(setDataOffers(data));
    }
    catch {
      dispatch(setDataError(true));
    }
  },
);

export const fetchAllDatas = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchAllDatas',
  async(id, {dispatch, extra: api}) => {
    try {
      const {data: offer} = await api.get<Offer>(`hotels/${id}`);
      dispatch(setDataHotel(offer));
      const {data: comment} = await api.get<Comment[]>(`comments/${id}`);
      dispatch(setDataComments(comment.slice(0, 10)));
      const {data: nearbyOffers} = await api.get<Offer[]>(`hotels/${id}/nearby`);
      dispatch(setDataNearbyOffers(nearbyOffers));
    }
    catch {
      dispatch(setDataError(true));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async(_arg, {dispatch, extra: api}) => {
    try {
      await api.get<string>(ApiRouts.Login);
      dispatch(setAuthorizationStatus(AuthStatuses.Auth));
    } catch{
      dispatch(setAuthorizationStatus(AuthStatuses.No_Auth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRouts.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthStatuses.Auth));
    dispatch(redirectToRoute('/'));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRouts.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthStatuses.No_Auth));
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Favorite[]>('/favorite');
    dispatch(setFavoritesOffers(data));
  },
);

export const fetchPostFavOffers = createAsyncThunk<void, Offer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postFavorites',
  async({id, isFavorite}, {dispatch, extra: api, getState}) => {
    const status = isFavorite ? 0 : 1;
    if(getState().authorizationStatus === AuthStatuses.No_Auth) {
      dispatch(redirectToRoute('/login'));
      return;
    }
    const {data} = await api.post<Offer>(`/favorite/${id}/${status}`);

    if(data.isFavorite) {
      dispatch(setFavoritesOffers([...getState().favorites, data]));
    }
    else {
      dispatch(setFavoritesOffers(getState().favorites.filter((offer) => offer.id !== data.id)));
    }
    dispatch(setDataOffers(getState().offers.map((offer) => offer.id === data.id ? data : offer)));
    if (getState().offer.id === data.id) {
      dispatch(setDataHotel(data));
    }
  },
);

export const fetchPostCommentAction = createAsyncThunk<void, PostData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async({id, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment[]>(`comments/${id}`,{comment, rating});
    dispatch(setDataComments(data.slice(0, 10)));
  }
);
