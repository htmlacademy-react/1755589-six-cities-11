import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRouts, AuthStatuses } from '../const';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { setDataOffers, setAuthorizationStatus, setDataOffersLoadingStatus, redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setDataOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(ApiRouts.Offers);
    dispatch(setDataOffersLoadingStatus(false));
    dispatch(setDataOffers(data));
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
      dispatch(setAuthorizationStatus(AuthStatuses.Auth));
      await api.get<string>(ApiRouts.Login);
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

