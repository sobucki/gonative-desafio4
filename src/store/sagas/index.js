import { all, takeLatest } from 'redux-saga/effects';

import { CatalogTypes } from '~/store/ducks/catalog';

import { loadCategories, loadProducts } from './catalog';

export default function* rootSaga() {
  return yield all([
    takeLatest(CatalogTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(CatalogTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
  ]);
}
