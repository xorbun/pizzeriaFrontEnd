import { type } from "@testing-library/user-event/dist/type";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export const actionType=
{
    SET_USER_TOKEN: "SET_USER_TOKEN",
    SET_USER_DATA: "SET_USER_DATA",
    SET_ALL_USERS: "SET_ALL_USERS",
    SET_MENU:"SET_MENU",
    SET_PIZZA:"SET_PIZZA",
    SET_BEVANDE:"SET_BEVANDE",
    SET_ANTIPASTI:"SET_ANTIPASTI",
    SET_PRENOTAZIONI:"SET_PRENOTAZIONI",
    SET_DELIVERY:"SET_DELIVERY",
    SET_NEW_FOOD:"SET_NEW_FOOD",
    SET_REGISTER:"SET_REGISTER",
    SET_MODIFY:"SET_MODIFY",
    SET_LOGIN_ERROR:"SET_LOGIN_ERROR",
    SET_MODIFY_MENU:"SET_MODIFY_MENU",
    SET_IMAGE:"SET_IMAGE"
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

export const setPizzaData=(pizza)=>
({
    type:actionType.SET_PIZZA,
    payload:pizza
})
export const setAntipastiData=(antipasti)=>
({
    type:actionType.SET_ANTIPASTI,
    payload:antipasti
})
export const setBevandeData=(bevande)=>
({
    type:actionType.SET_BEVANDE,
    payload:bevande
})
export const setModify=(currentuser)=>
({
    type:actionType.SET_MODIFY,
    payload:currentuser
})
export const setError=(error)=>
({
    type:actionType.SET_LOGIN_ERROR,
    payload:error
})
export const setModifyMenu=(modifyMenu)=>
({
    type:actionType.SET_MODIFY_MENU,
    payload:modifyMenu
})
export const setNewFood=(newFood)=>
({
    type:actionType.SET_NEW_FOOD,
    payload:newFood
})
export const setimage=(image)=>
({
    type:actionType.SET_IMAGE,
    payload:image
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
            dispatch(getUserData(data.token))
            
            return data.token;
        }
        else
        {
            console.log(response);
            dispatch(setError(true));
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
    const URL="http://localhost:3001/prenotazioni/me";
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
export const getAllPrenotazioniData=(token)=>async(dispatch)=>
{
    const URL="http://localhost:3001/prenotazioni"
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
    const URL="http://localhost:3001/delivery/me";
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
export const getAllDeliveryData=(token)=>async(dispatch)=>
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
                throw new Error("errore",response.status,response.statusText)
            }
    }
    catch(error)
    {
        console.Error(error)
    }
}
export const getPizzaData=()=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu/type?type=PIZZA";
    try
    {
        const response=await fetch(URL,
            {
                method:"GET",
                headers:
                {
                    "Content-Type":"application/json"
                }
            })
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setPizzaData(data));
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
export const getAntipastiData=()=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu/type?type=ANTIPASTI";
    try
    {
        const response=await fetch(URL,
            {
                method:"GET",
                headers:
                {
                    "Content-Type":"application/json"
                }
            })
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setAntipastiData(data));
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
export const getBevandeData=()=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu/type?type=BEVANDE";
    try
    {
        const response=await fetch(URL,
            {
                method:"GET",
                headers:
                {
                    "Content-Type":"application/json"
                }
            })
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setBevandeData(data));
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

export const takeanorder=(token,orderedFood,payload)=>async(dispatch)=>
{
    
    const URL="http://localhost:3001/delivery?idMenu=" + orderedFood;
    try
    {
        const response=await fetch(URL,
            {
                method:"POST",
                headers:
                {
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(payload)
            })
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setDeliveryData(data));
            }
            else
            {
                throw new Error("errore");
            }
    }
    catch(error)
    {
        console.error(error)
    }
}
export const deleteaPreorder=(token,deletedPreorder)=>async(dispatch)=>
{
    const URL="http://localhost:3001/prenotazioni/" + deletedPreorder;
    try
    {
        const response=await fetch(URL,
            {
                method:"DELETE",
                headers:
                {
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json",
                }
            })
            if(response.ok)
            {
                
               console.log("cancellato")
            }
            else
            {
                Alert("prenotazione non cancellata")
                throw new Error("errore",response.status, response.statusText)
            }
    }
    catch(error)
    {
        console.error(error)
    }
}
export const deleteaDelivery=(token,deletedDelivery)=>async(dispatch)=>
{
    const URL="http://localhost:3001/delivery/"+ deletedDelivery;
    try
    {
        const response=await fetch(URL,
            {
                method:"DELETE",
                headers:
                {
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json",
                }
            })
            if(response.ok )
            {
               console.log("cancellato")
            }
            else
            {
                Alert("ordine non cancellato")
                throw new Error("errore",response.status,response.statusText)
            }
    }
    catch(error)
    {
        console.error(error)
    }
}
export const modifyMenu=(token,modifiedFood,descrizione,ingredienti,prezzo,type)=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu/" + modifiedFood
    try
    {
        const response=await fetch(URL,
            {
                method:"PUT",
                headers:
                {
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    descrizione:descrizione,
                    ingredienti:ingredienti,
                    prezzo:prezzo,
                    type:type
                })
            })
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setModifyMenu(data))
            }
            else
            {
                throw new Error("errore",response.status,response.statusText)
            }
    }
    catch(error)
    {
        console.error(error)
    }
}
export const setNewFoodToMenu=(token,descrizione,image,prezzo,ingredienti,type)=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu";
    try
    {
        const response=await fetch(URL,
            {
                method:"POST",
                headers:
                {
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    descrizione:descrizione,
                    image:image,
                    prezzo:prezzo,
                    ingredienti:ingredienti,
                    type:type
                })
            })
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setNewFood(data))
            }
            else
            {
                throw new Error("errore",response.status,response.statusText)
            }
    }
    catch(error)
    {
        console.Error(error);
    }
}
export const setNewImage=(token,image,id)=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu/upload/"+ id;
    try
    {
        const response=await fetch(URL,
            {
                method:"PATCH",
                headers:
                {
                    Authorization:"Bearer "+token,
                    Accept: "application/json",
                },
                body:image
                
            })
            if(response.ok)
            {
                const data=await response.json();
                dispatch(setimage(data))
                console.log(data);
            }
            else
            {
                throw new Error("error", response.status,response.statusText)
            }
    }
    catch(error)
    {
        console.error(error)
    }
}
export const deleteFood=(token,orderedFood)=>async(dispatch)=>
{
    const URL="http://localhost:3001/menu/" + orderedFood;
    try
    {
        const response=await fetch(URL,
            {
                method:"DELETE",
                headers:
                {
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json",
                }
            })
            if(response.ok )
            {
               console.log("cancellato")
            }
            else
            {
                Alert("ordine non cancellato")
                throw new Error("errore",response.status,response.statusText)
            }
    }
    catch(error)
    {
        console.error(error)
    }
}