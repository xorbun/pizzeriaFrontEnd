import { actionType } from "../actions"


const initialState=
{
    loginError:false
}

const authReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionType.SET_LOGIN_ERROR:
            return{
                 ...state,loginError:action.payload
            }
        default:
            return state;
    }
}
export default authReducer;