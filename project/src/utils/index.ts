import { InputValues, TitleValues, SortingValues } from '../const';
import { Offer } from '../types/offer';

const MAX = 5;

export const getRating = (value: number) => (Math.round(value) / MAX) * 100;

export const setRating = (value: number) => {
  switch(true) {
    case value === InputValues.Five:
      return TitleValues.Perfect;
    case value === InputValues.Four:
      return TitleValues.Good;
    case value === InputValues.Three:
      return TitleValues.Not_Bad;
    case value === InputValues.Two:
      return TitleValues.Badly;
    case value === InputValues.One:
      return TitleValues.Terribly;
    default:
      return 0;
  }
};

export const getSortingValues = (offers: Offer[], currentValue: string) => {
  let values: Offer[] = [];

  switch(true) {
    case currentValue === SortingValues.IncPrice:
      values = offers.sort((a, b) => a.price - b.price);
      return values;
    case currentValue === SortingValues.DecPrice:
      values = offers.sort((a, b) => b.price - a.price);
      return values;
    case currentValue === SortingValues.TopRated:
      values = offers.sort((a, b) => b.rating - a.rating);
      return values;
    case currentValue === SortingValues.Popular:
      return offers;
    default:
      return offers;
  }
};
