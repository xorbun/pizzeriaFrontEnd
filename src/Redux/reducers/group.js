import { actionType } from "../actions";

const initialState={
    data:null,
  
}
const groupReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionType.GROUPBY:
            return{
                ...state,data:action.payload
            }
        
        default:
            return state;
    }
}
export default groupReducer