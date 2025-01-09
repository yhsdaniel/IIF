import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { Category, AllProduct, perCategory, detailProduct, cartSlice } from './redux'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  // user: persistReducer(persistConfig, LoginUser.reducer),
  detailProduct: persistReducer(persistConfig, detailProduct.reducer),
  cart: persistReducer(persistConfig, cartSlice.reducer),
  // nameUser: NameUser.reducer,
  category: Category.reducer,
  product: AllProduct.reducer,
  perCategory: perCategory.reducer,
  // count: counterSlice.reducer,
})

// const persistedReducer = persistReducer(persistConfig, rootReducer.user)
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk]
  applyMiddleware
})

export const persistor = persistStore(store)