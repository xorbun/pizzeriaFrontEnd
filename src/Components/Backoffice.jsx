import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersData,
  getAntipastiData,
  getBevandeData,
  getMenuData,
  getPizzaData,
  getPrenotazioni,
  getTokenFromLogin,
} from "../Redux/actions";

const BackOfficeFetch = () => {
  const dispatch = useDispatch();
  const token=localStorage.getItem("token");
  const menu = dispatch(getMenuData());
  const pizze = dispatch(getPizzaData());
  const antipasti = dispatch(getAntipastiData());
  const bevande = dispatch(getBevandeData());
  const prenotazioni=dispatch(getPrenotazioni(token));
  
  return <></>;
};
export default BackOfficeFetch;
