import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { AllProduct, cartSlice } from './redux'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart: persistReducer(persistConfig, cartSlice.reducer),
  product: AllProduct.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)