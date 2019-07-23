import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions Types e Creators
 */
const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
  loadCategoriesFailure: null,

  loadProductsRequest: ['categoryId'],
  loadProductsSuccess: ['data'],
  loadProductsFailure: null,
});

export const CatalogTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  categories: [],
  products: [],
  selectedCategory: null,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { data }) => state.merge({ categories: data }),

  [Types.LOAD_PRODUCTS_REQUEST]: (state, { categoryId }) => state.merge({ selectedCategory: categoryId }),
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ products: data.products }),
});
