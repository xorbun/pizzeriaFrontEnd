import { actionType } from "../actions";

const initialState={
    
    data:null
}

const userReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionType.SET_USER_DATA:
            return{
                ...state,data:action.payload
            };
        case actionType.SET_ALL_USERS:
            return{
                ...state,data:action.payload
            }
            default:
                return state;
    }
}
export default userReducer