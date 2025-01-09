import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { cartSlice } from './redux'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart: persistReducer(persistConfig, cartSlice.reducer),
})

export const store = configureStore({
  reducer: rootReducer,
})

export const persistor = persistStore(store)