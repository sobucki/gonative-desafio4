import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions Types e Creators
 */
const { Types, Creators } = createActions({
  addProductToCart: ['product'],
});

export const CartTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  listOfProducts: [],
});

/**
 * Reducer
 */

const addProduct = (state, { product }) => {
  let productLine = state.listOfProducts.find(p => p.product.id === product.id);

  if (!productLine) {
    productLine = { product, quantity: 1 };
    return state.merge({ listOfProducts: [...state.listOfProducts, productLine] });
  }

  productLine = { ...productLine, quantity: productLine.quantity + 1 };

  const newListOfProducts = [...state.listOfProducts];
  // replace old index
  newListOfProducts.splice(state.listOfProducts.indexOf(productLine), 1, productLine);
  return state.merge({ listOfProducts: [...newListOfProducts] });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT_TO_CART]: addProduct,
});
