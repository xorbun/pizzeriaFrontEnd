import { actionType } from "../actions"


const initialState={
    data:null,
    single:null
}

const deliveryReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionType.SET_DELIVERY:
            return{
                ...state,data:action.payload
            }
         case actionType.SET_SINGLE_DELIVERY:
            return{
                ...state,single:action.payload
            }
           
       
        
        default:
            return state;
    }
}
export default deliveryReducer;