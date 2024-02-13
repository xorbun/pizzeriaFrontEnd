import { type } from "@testing-library/user-event/dist/type";
import { resolvePath } from "react-router-dom";

export const actionType=
{
    SET_USER_TOKEN: "SET_USER_TOKEN",
    SET_USER_DATA: "SET_USER_DATA",
    SET_USER_ROLE: "SET_USER_ROLE",
    SET_ALL_USERS: "SET_ALL_USERS",
    SET_MENU:"SET_MENU",
    SET_PRENOTAZIONI:"SET_PRENOTAZIONI",
    SET_DELIVERY:"SET_DELIVERY",
    SET_REGISTER:"SET_REGISTER"
}
export const setUserToken = (token) => ({
    type: actionType.SET_USER_TOKEN,
    payload: token
  });
export const SetUserData=(data)=>
({
    type:actionType.SET_USER_DATA,
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
    type:actionType.SET_MENU,
    payload:menu
})
export const setPrenotazioniData=(prenotazioni)=>
({
    type:actionType.SET_PRENOTAZIONI,
    payload:prenotazioni
})
export const setDeliveryData=(delivery)=>
({
    type:actionType.SET_DELIVERY,
    payload:delivery
})


export const getTokenFromLogin=(email,password)=>async(dispatch)=>
{
    const URL="http://localhost:3001/auth/login";
    const response=await fetch(URL,
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
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
                Authorization:"Bearer "+ token,
                "Content-Type":"application/json"
            }
        });
        if(response.ok)
        {
            const data=await response.json();
            dispatch(SetUserData(data.content));
            console.log(data.content);
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
                Authorization:"Bearer "+ token,
                "Content-Type":"application/json"
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

export const getMenuData=()=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu";
    try
    {
        const response=await fetch(URL,
            {
                method:"GET",
                headers:
                {
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
export const getPrenotazioni=(token)=>async(dispatch)=>
{
    const URL="http://localhost:3001/prenotazioni";
    try
    {
        const response=await fetch(URL,
            {
                method:"GET",
                headers:
                {
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json"
                }
            });
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setPrenotazioniData(data));
                return data;
            }
            else
            {
                throw new Error("errore")
            }
    }
    catch(error)
    {
        console.error(error);
    }
}
export const getDeliveryData=(token)=>async(dispatch)=>
{
    const URL="http://localhost:3001/delivery";
    try
    {
        const response=await fetch(URL,
            {
                method:"GET",
                headers:
                {
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json"
                }
            });
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setDeliveryData(data));
                return data;
            }
            else
            {
                throw new Error("errore");
            }
    }
    catch(error)
    {
        console.error(error);
    }
}
