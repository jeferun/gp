import { createSelector } from 'reselect';
// type
import { RootState } from 'store';

// selector
const selectProducts = (state: RootState) => state.product.products;
const selectList = (state: RootState) => state.history.list;
const selectTypeId = (state: RootState) => state.product.typeId;

export const selectProductsByType = createSelector(
  [selectProducts, selectTypeId],
  (products, typeId) => (
    products.filter((product) => (product.type.id === typeId || !typeId))
  )
);

export const selecthistory = createSelector(
  [selectList],
  (list = []) => (
    list.map((l) => l.type)
  )
);

