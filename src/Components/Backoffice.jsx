import { useDispatch } from "react-redux";
import {
  getAllUsersData,
  getAntipastiData,
  getBevandeData,
  getMenuData,
  getPizzaData,
  getTokenFromLogin,
} from "../Redux/actions";

const BackOfficeFetch = () => {
  const dispatch = useDispatch();
  const menu = dispatch(getMenuData());
  const pizze = dispatch(getPizzaData());
  const antipasti = dispatch(getAntipastiData());
  const bevande = dispatch(getBevandeData());

  
  return <></>;
};
export default BackOfficeFetch;
