import { type } from "@testing-library/user-event/dist/type";
import { resolvePath } from "react-router-dom";

export const actionType=
{
    SET_USER_TOKEN: "SET_USER_TOKEN",
    SET_USER_DATA: "SET_USER_DATA",
    SET_USER_ROLE: "SET_USER_ROLE",
    SET_ALL_USERS: "SET_ALL_USERS",
    SET_MENU:"SET_MENU",
}
export const setUserToken = (token) => ({
    type: actionType.SET_USER_TOKEN,
    payload: token
  });

export const SetUserData=(data)=>
({
    type:actionType.SetUserData,
    payload:data
});
export const setUserRole=(role)=>
({
    type:actionType.SET_USER_ROLE,
    payload:role
});
export const setAllUsers=(users)=>
({
    type:actionType.SET_ALL_USERS,
    payload:users
})
export const setRegisterData=(data)=>
({
    type:actionType.SET_REGISTER,
    payload:data
})
export const setMenuData=(menu)=>
({
    type:actionType.setMenuData,
    payload:menu
})


export const getTokenFromLogin=(email,password)=>async(dispatch)=>
{
    const URL="http://localhost:3001/auth/login";
    const response=await fetch(URL,
        {
            method:"POST",
            headers:{"Content-Type":"application/Json"},
            body:JSON.stringify({
                email:email,
                password:password
            })
        });
        if(response.ok)
        {
            const data=await response.json();
            dispatch(setUserToken(data.token));
            localStorage.setItem("token",data.token);
            return data.token;
        }
        else
        {
            throw new Error("errore");
        }
};


export const getUserData=(token)=> async(dispatch)=>
{
    const URL="http://localhost:3001/users/me";
    const response=await fetch(URL,
        {
            method:"GET",
            headers:{
                Authorization:"Bearer"+token,
                "Content-Type":"application/Json"
            }
        });
        if(response.ok)
        {
            const data=await response.json();
            dispatch(SetUserData(data));
            console.log(data);
            return data;
        }
        else
        {
            throw new Error("errore");
        }
}
export const getAllUsersData=(token)=>async(dispatch)=>
{
    const URL="http://localhost:3001/users";
    const response=await fetch(URL,
        {
            method:"GET",
            headers:{
                Authorization:"Bearer"+token,
                "Content-Type":"application/Json"
            }
        });
        if(response.ok)
        {
            const data=await response.json();
            dispatch(setAllUsers(data));
            return data;
        }
        else
        {
            throw new Error("Errore");
        }
}

export const getMenuData=(token)=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu";
    try
    {
        const response=await fetch(URL,
            {
                method:"GET",
                headers:
                {
                    Authorization:"Bearer"+token,
                    "Content-Type":"application/json"
                }
            });
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setMenuData(data));
                return data;
            }
            else
            {
                throw new Error("errore nella fetch");
            }
    }
    catch(error)
    {
        console.error(error);
    }
}
