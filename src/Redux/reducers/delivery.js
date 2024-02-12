import { actionType } from "../actions"


const initialState=
{
    data:null
}

const deliveryReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionType.SET_DELIVERY:
            return{
                ...state,data:action.payload
            }
        default:
            return state;
    }
}
export default deliveryReducer;