import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userReducer from '../reducers/users'
import menuReducer from '../reducers/menu'
import prenotazioniReducer from '../reducers/prenotazioni'
import deliveryReducer from '../reducers/delivery'
import authReducer from '../reducers/auth';
import errorReducer from '../reducers/error';
import groupReducer from '../reducers/group';



const persistConfig = {
  key: 'root',
  storage,

};



const bigReducer = combineReducers({
  auth:authReducer,
  users: userReducer,
  menu: menuReducer,
  prenotazioni: prenotazioniReducer,
  delivery: deliveryReducer,
  error:errorReducer,
  group:groupReducer
});

const persistedReducer = persistReducer(persistConfig, bigReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export  { store, persistor };