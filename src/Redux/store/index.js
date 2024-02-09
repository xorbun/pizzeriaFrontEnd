
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth'
import menuReducer from '../reducers/menu'

const bigReducer=combineReducers({
 auth: null,
 menu: null,

})
const store=configureStore({
    reducer:bigReducer,
})
export default store