import { createSlice, PayloadAction } from '@reduxjs/toolkit';


/* interface */// organizar
interface IProduct {
  name: string;
  type: 'd' | 's';
}

interface IState {
  products: IProduct[];
}

/* fin */

const initialState: IState = {
  // sample data
  products: [
    {name: 'product 1', type: 's'},
    {name: 'product 2', type: 's'},
    {name: 'product 3', type: 'd'},
    {name: 'product 4', type: 'd'},
    {name: 'product 5', type: 's'},
  ]
};

export const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    }
  },
});

export const { addProduct } = slice.actions;

export default slice.reducer;