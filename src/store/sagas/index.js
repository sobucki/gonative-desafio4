import { all, takeLatest } from 'redux-saga/effects';

import { CatalogTypes } from '~/store/ducks/catalog';

import { load } from './catalog';

export default function* rootSaga() {
  return yield all([takeLatest(CatalogTypes.LOAD_CATEGORIES_REQUEST, load)]);
}
