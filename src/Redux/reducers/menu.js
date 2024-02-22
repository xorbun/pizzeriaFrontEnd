import { actionType } from "../actions";


const initialState={
    
    menu:"",
    pizza:"",
    antipasti:"",
    bevande:""
}

const menuReducer=(state = initialState,action)=>
{
        switch(action.type)
        {
            case actionType.SET_MENU:
                return{
                    ...state,menu:action.payload
                }
            case actionType.SET_PIZZA:
                return{
                    ...state,pizza:action.payload
                }
            case actionType.SET_ANTIPASTI:
                return{
                    ...state,antipasti:action.payload
                }
            case actionType.SET_BEVANDE:
                return{
                    ...state,bevande:action.payload
                }
            case actionType.SET_MODIFY_MENU:
                return{
                    ...state,menu:action.payload,
                }
            default:
                return state;
        }
}
export default menuReducer;