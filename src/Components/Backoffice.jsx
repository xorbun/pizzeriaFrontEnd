import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersData,
  getAntipastiData,
  getBevandeData,
  getMenuData,
  getPizzaData,
  getPrenotazioni,
  
} from "../Redux/actions";

const BackOfficeFetch = () => {
  const dispatch = useDispatch();
  const token=localStorage.getItem("token");
  const menu = dispatch(getMenuData());
  const pizze = dispatch(getPizzaData());
  const antipasti = dispatch(getAntipastiData());
  const bevande = dispatch(getBevandeData());
  
  
  return <></>;
};
export default BackOfficeFetch;
