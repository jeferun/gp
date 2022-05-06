import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProducts, getProductTypes } from 'services';

interface IState {
  products: IProduct[];
  filterProducts: IProduct[];
  isLoading: boolean;
  types: IProductType[];
  typeId: number;
}

const initialState: IState = {
  // sample data
  products: [],
  filterProducts: [],
  isLoading: false,
  types: [],
  typeId: 0,
};

export const products = createAsyncThunk(
  'product/productsA',
  async () => {
    const result = await getProducts();

    return result;
  }
);

export const productTypes = createAsyncThunk(
  'product/productTypes',
  async () => {
    const result = await getProductTypes();

    return result;
  }
);

export const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, { payload }: PayloadAction<IProduct>) => {
      state.products.push(payload);
    },
    setTypeId: (state, { payload }: PayloadAction<number>) => (
      {
        ...state,
        typeId: payload
      }
    ),
  },
  extraReducers: (builder) => {
    // products
    builder.addCase(products.pending, (state) => {
      const s = state;
      s.isLoading = true;
    }).addCase(products.fulfilled, (state, action) => {
      const s = state;
      s.products = action.payload.data;
      s.filterProducts = action.payload.data;
    }).addCase(products.rejected, (state) => {
      const s = state;
      s.isLoading = false;
    });
    // productTypes
    builder.addCase(productTypes.fulfilled, (state, action) => {
      const s = state;
      s.types = action.payload.data;
    });
  }
});

export const { setProduct, setTypeId } = slice.actions;

export default slice.reducer;