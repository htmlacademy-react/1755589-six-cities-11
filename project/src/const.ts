
export enum AuthStatuses {
  Auth = 'AUTH',
  No_Auth = 'NO_AUTH',
  Uknown = 'UKNOWN'
}

export enum TitleValues {
  Perfect = 'perfect',
  Good = 'good',
  Not_Bad = 'not bad',
  Badly = 'badly',
  Terribly = 'terribly'
}

export const enum InputValues {
  Five = 5,
  Four = 4,
  Three = 3,
  Two = 2,
  One = 1
}

export const INPUT_VALUES: number[] = [5, 4, 3, 2, 1];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITIES_LIST: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum SortingValues {
  Popular = 'Popular',
  IncPrice = 'Price: low to high',
  DecPrice = 'Price: high to low',
  TopRated = 'Top rated first'
}

export const BACKEND_URL = 'https://11.react.pages.academy/six-cities';

export const REQUES_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY = 'offers-token';

export enum ApiRouts {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
  Comments = '/comments'
}
