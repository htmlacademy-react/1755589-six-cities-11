import { createAction } from '@reduxjs/toolkit';
import { AuthStatuses } from '../const';
import { Offer } from '../types/offer';

export const setCity = createAction('setCity',
  (city: string) => ({payload: city})
);

export const setOffers = createAction('setOffers',
  (city: string, offers: Offer[]) => ({payload: offers.filter((offer) => offer.city.name === city)})
);

export const setSortingValue = createAction('setSortingValue',
  (sortingValue: string) => ({payload: sortingValue})
);

export const setDataOffers = createAction('getDataOffers',
  (data: Offer[]) => ({payload: data})
);

export const setDataOffersLoadingStatus = createAction('setDataOffersLoadingStatus',
  (status: boolean) => ({payload: status})
);

export const setAuthorizationStatus = createAction('setAathorizationStatus',
  (authStatus: AuthStatuses) => ({payload: authStatus})
);

export const redirectToRoute = createAction('redirectToRoute',
  (route: string) => ({payload: route}));
