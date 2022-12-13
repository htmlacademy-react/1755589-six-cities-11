import { createAction } from '@reduxjs/toolkit';
import { AuthStatuses } from '../const';
import { Comment } from '../types/comment';
import { Offer } from '../types/offer';

export const setCity = createAction('setCity',
  (city: string) => ({payload: city})
);

export const setFavoritesCity = createAction('setFavoriteCity',
  (city: string) => ({payload: city})
);

export const setDataComments = createAction('setDataComments',
  (comments: Comment[]) => ({payload: comments})
);

export const setSortingValue = createAction('setSortingValue',
  (sortingValue: string) => ({payload: sortingValue})
);

export const setDataOffers = createAction('setDataOffers',
  (data: Offer[]) => ({payload: data})
);

export const setDataError = createAction('setDataError',
  (data: boolean) => ({payload: data})
);

export const setDataOffersLoadingStatus = createAction('setDataOffersLoadingStatus',
  (status: boolean) => ({payload: status})
);

export const setAuthorizationStatus = createAction('setAathorizationStatus',
  (authStatus: AuthStatuses) => ({payload: authStatus})
);

export const redirectToRoute = createAction('redirectToRoute',
  (route: string) => ({payload: route}));

export const setDataNearbyOffers = createAction('setDataNearbyOffers',
  (nearbyOffers: Offer[]) => ({payload: nearbyOffers})
);

export const setRatingValue = createAction('setRatingValue',
  (rating: number) => ({payload: rating})
);

export const setDataHotel = createAction('setDataHotel',
  (hotel: Offer) => ({payload: hotel})
);

export const setFavoritesOffers = createAction('setFavoritesData',
  (favorites: Offer[]) => ({payload: favorites})
);

export const setFavLength = createAction('setFavLength',
  (favLength: number) => ({payload: favLength})
);
