import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setDataOffers, setAuthorizationStatus, setCity, setDataOffersLoadingStatus, setOffers, setSortingValue } from './action';
import { Offer } from '../types/offer';
import { AuthStatuses, SortingValues } from '../const';

 type initialType = {
  activeCity: string;
  offers: Offer[];
  sortingValue: string;
  isDataOffersLoading: boolean;
  authorizationStatus: AuthStatuses;
 }

const initialState: initialType = {
  activeCity: '',
  offers: [],
  sortingValue: SortingValues.Popular,
  isDataOffersLoading: false,
  authorizationStatus: AuthStatuses.Uknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    })
    .addCase(setCity, (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
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
    });
});

export { reducer };
