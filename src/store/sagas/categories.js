import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';

export function* load() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(CategoriesActions.loadSuccess(response.data));
  } catch (error) {
    yield put(CategoriesActions.loadFailure());
  }
}
