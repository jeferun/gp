import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  list: IHistory[];
}

const initialState: IState = {
  // sample data
  list: [],
};

export const slice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, { payload }: PayloadAction<IHistory>) => {
      state.list.push(payload);
    },
  },
});

export const { setHistory } = slice.actions;

export default slice.reducer;