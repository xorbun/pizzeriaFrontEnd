import { useDispatch, useSelector } from "react-redux";
import { getAllUsersData, getMenuData } from "../Redux/actions";

const MenuRestourant = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => {
    return state.auth.token});
  const utente = useSelector((state) => {
    return state.users.data
  });
 const menu=dispatch(getMenuData(token));
 const allUsers=dispatch(getAllUsersData(token));
  console.log(menu,allUsers);
  return( 
  <>
    
  </>
  );
};
export default MenuRestourant;
