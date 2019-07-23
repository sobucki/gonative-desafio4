import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import CatalogActions from '~/store/ducks/catalog';

export function* load() {
  try {
    const response = yield call(api.get, 'categories');

    const selectedCategory = yield select(state => state.catalog.selectedCategory);

    if (!selectedCategory) {
      yield put(CatalogActions.loadProductsRequest(response.data[0].id));
    }

    yield put(CatalogActions.loadCategoriesSuccess(response.data));
  } catch (error) {
    yield put(CatalogActions.loadCategoriesFailure());
  }
}
