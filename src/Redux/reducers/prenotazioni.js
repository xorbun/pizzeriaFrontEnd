import { actionType } from "../actions"




const initialState={
    
    data:null
}
const prenotazioniReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionType.SET_PRENOTAZIONI:
            return{
                ...state,data:action.payload
            }
        
            default:
                return state;
    }
}
export default prenotazioniReducer