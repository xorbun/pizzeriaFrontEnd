import { useDispatch, useSelector } from "react-redux";
import {
  
  getAllDeliveryData,
  getAllPrenotazioniData,
  getAntipastiData,
  getBevandeData,
  getDeliveryData,
  getMenuData,
  getPizzaData,
  getPrenotazioni,
  groupBy,
} from "../Redux/actions";

const BackOfficeFetch = () => {
  const dispatch = useDispatch();
  const token=localStorage.getItem("token")
  const menu = dispatch(getMenuData());
  const pizze = dispatch(getPizzaData());
  const antipasti = dispatch(getAntipastiData());
  const bevande = dispatch(getBevandeData());
  const user=useSelector((state)=>
  {
    return state.users.data
  })
  if(token)
  {
   
    if(user.role !== "ADMIN" )
    {
     
      const ordini = dispatch(getDeliveryData(token));
      const prenotazioni=dispatch(getPrenotazioni(token));
    }
    else
    {
      const group=dispatch(groupBy(token));
      const ordini=dispatch(getAllDeliveryData(token));
      const prenotazioni=dispatch(getAllPrenotazioniData(token))
    }
  }
  
  return <></>;
};
export default BackOfficeFetch;
