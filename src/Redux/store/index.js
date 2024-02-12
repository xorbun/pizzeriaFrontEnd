
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth'
import userReducer from '../reducers/users'
import menuReducer from '../reducers/menu'

const bigReducer=combineReducers({
 auth: authReducer,
 users:userReducer,
 menu:menuReducer

})
const store=configureStore({
    reducer:bigReducer,
})
export default store