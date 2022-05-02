import { createSelector } from 'reselect';
// type
import { RootState } from 'store';
// constants
import CONSTANTS from 'utils/constants';

// selector
const selectProducts = (state: RootState) => state.product.products;

export const selectProductsByTypeA = createSelector(
  [selectProducts],
  (products) => (
    products.filter((product) => product.type === CONSTANTS.productTypes.typeA)
  )
);

export const selectProductsByTypeB = createSelector(
  [selectProducts],
  (products) => (
    products.filter((product) => product.type === CONSTANTS.productTypes.typeB)
  )
);

