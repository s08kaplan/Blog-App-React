import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import AuthReducer from "../FEATURES/AuthSlice"

 
const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, AuthReducer)

const store = configureStore({
    reducer:{
       auth: persistedReducer 

    }
})

export const persistor = persistStore(store)

export default store


