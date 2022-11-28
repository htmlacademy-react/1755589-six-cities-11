import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import broserHistory from '../../browser-history';
import { reducer } from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
(store) =>
  (next) =>
    (action: PayloadAction<string>) => {
      if(action.type === 'redirectToRoute') {
        broserHistory.push(action.payload);
      }
      return next(action);
    };
