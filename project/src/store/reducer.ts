import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setFavLength, setFavoritesCity, setDataHotel, setRatingValue, setDataOffers, setAuthorizationStatus, setCity, setDataComments, setSortingValue, setDataNearbyOffers, setDataError, setDataOffersLoadingStatus, setFavoritesOffers } from './actions';
import { Offer } from '../types/offer';
import { Comment } from '../types/comment';
import { AuthStatuses, SortingValues } from '../const';
import { offer } from './offer/offer';

 type initialType = {
  activeCity: string;
  activeFavCity: string;
  offer: Offer;
  offers: Offer[];
  comments: Comment[];
  nearbyOffers: Offer[];
  sortingValue: string;
  isDataOffersLoading: boolean;
  authorizationStatus: AuthStatuses;
  error: boolean;
  ratingValue: number;
  favorites: Offer[];
  isFavorite: boolean;
  favoritesLength: number;
 }

const initialState: initialType = {
  activeCity: '',
  activeFavCity: '',
  offers: [],
  offer: offer,
  comments: [],
  nearbyOffers: [],
  sortingValue: SortingValues.Popular,
  isDataOffersLoading: false,
  authorizationStatus: AuthStatuses.No_Auth,
  error: false,
  ratingValue: 0,
  favorites: [],
  isFavorite: false,
  favoritesLength: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataComments, (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    })
    .addCase(setCity, (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    })
    .addCase(setFavoritesCity, (state, action: PayloadAction<string>) => {
      state.activeFavCity = action.payload;
    })
    .addCase(setSortingValue, (state, action: PayloadAction<string>) => {
      state.sortingValue = action.payload;
    })
    .addCase(setDataOffersLoadingStatus, (state, action: PayloadAction<boolean>) => {
      state.isDataOffersLoading = action.payload;
    })
    .addCase(setDataOffers, (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action: PayloadAction<AuthStatuses>) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataNearbyOffers, (state, action: PayloadAction<Offer[]>) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setDataError, (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    })
    .addCase(setRatingValue, (state, action: PayloadAction<number>) => {
      state.ratingValue = action.payload;
    })
    .addCase(setDataHotel, (state, action: PayloadAction<Offer>) => {
      state.offer = action.payload;
    })
    .addCase(setFavoritesOffers, (state, action: PayloadAction<Offer[]>) => {
      state.favorites = action.payload;
    })
    .addCase(setFavLength, (state, action: PayloadAction<number>) => {
      state.favoritesLength = action.payload;
    });
});

export { reducer };
