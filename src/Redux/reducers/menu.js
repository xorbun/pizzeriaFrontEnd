import { actionType } from "../actions";


const initialState={
    
    menu:""
}

const menuReducer=(state = initialState,action)=>
{
        switch(action.type)
        {
            case actionType.SET_MENU:
                return{
                    ...state,menu:action.payload
                }
            default:
                return state;
        }
}
export default menuReducer;