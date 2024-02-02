import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import AuthReducer from "../FEATURES/AuthSlice";
import BlogReducer from "../FEATURES/BlogSlice";
import NewsReducer from "../FEATURES/NewsSlice";
import ShoppingReducer from "../FEATURES/ShoppingSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, AuthReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blog: BlogReducer,
    news: NewsReducer,
    shopping: ShoppingReducer
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
