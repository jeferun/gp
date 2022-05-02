import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, PERSIST } from 'redux-persist';
import { combineReducers } from 'redux';
// reducer
import { productSlice } from './product';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  /*  whitelist: [''], // Array of reducers to persist  */
};

const reducer = combineReducers({ // organizar
  product: productSlice
});

const persistedReducer = persistReducer(persistConfig, reducer);

const rootReducer = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  // middleware: [thunk],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST],
    }
  }),
});

export type RootState = ReturnType<typeof rootReducer.getState>


export default rootReducer;