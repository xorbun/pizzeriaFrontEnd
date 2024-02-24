import { actionType } from "../actions"

const initialState=
{
    genericError:false
}

const errorReducer=(state=initialState, action)=>
{
    switch(action.type)
    {
        case actionType.SET_ERROR:
            return{
                ...state,genericError:action.payload
            };
            default:
                return state;
    }
}
export default errorReducer