import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions Types e Creators
 */
const { Types, Creators } = createActions({
  addProductToCart: ['product'],
  removeProductInCart: ['product'],
  updateQuantityProduct: ['product', 'newQuantity'],
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

function findProductInList(list, product) {
  return list.find(p => p.product.id === product.id);
}

const addProduct = (state, { product }) => {
  let productLine = state.listOfProducts.find(p => p.product.id === product.id);
  const indexProduct = state.listOfProducts.indexOf(productLine);
  if (!productLine) {
    productLine = { product, quantity: 1 };
    return state.merge({ listOfProducts: [...state.listOfProducts, productLine] });
  }

  productLine = { ...productLine, quantity: productLine.quantity + 1 };

  const newListOfProducts = [...state.listOfProducts];
  // replace old index
  newListOfProducts.splice(indexProduct, 1, productLine);
  return state.merge({ listOfProducts: [...newListOfProducts] });
};

const updateProduct = (state, { product, newQuantity }) => {
  let productLine = findProductInList(state.listOfProducts, product);

  productLine = { ...productLine, quantity: newQuantity };

  const newListOfProducts = [...state.listOfProducts];
  // replace old index
  newListOfProducts.splice(state.listOfProducts.indexOf(productLine), 1, productLine);
  return state.merge({ listOfProducts: [...newListOfProducts] });
};

const removeProduct = (state, { product }) => {
  const productLine = findProductInList(state.listOfProducts, product);

  const newListOfProducts = [...state.listOfProducts];
  // replace old index
  newListOfProducts.splice(state.listOfProducts.indexOf(productLine), 1);
  return state.merge({ listOfProducts: [...newListOfProducts] });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT_TO_CART]: addProduct,
  [Types.REMOVE_PRODUCT_IN_CART]: removeProduct,
  [Types.UPDATE_QUANTITY_PRODUCT]: updateProduct,
});
