
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth'
import userReducer from '../reducers/users'
import menuReducer from '../reducers/menu'
import prenotazioniReducer from '../reducers/prenotazioni'
import deliveryReducer from '../reducers/delivery'

const bigReducer=combineReducers({
 auth: authReducer,
 users:userReducer,
 menu:menuReducer,
 prenotazioni:prenotazioniReducer,
 delivery:deliveryReducer

})
const store=configureStore({
    reducer:bigReducer,
})
export default store