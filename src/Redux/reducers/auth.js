import { actionType } from "../actions";




const initialState={
    token:localStorage.getItem("token") || null,
   
    
}

const authReducer=(state= initialState,action)=>
{
    switch (action.type)
    {
        case actionType.SET_USER_TOKEN:
            return{
                ...state,token:action.payload
            };
        

            default:
                return state;
    }
}
export default authReducer;