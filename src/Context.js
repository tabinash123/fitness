import { createContext, useEffect, useReducer, useState } from "react";

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
    

    const [detail, dispatch] = useReducer(fitnessReducer, [],);
    
    const secondaryAdd = (name,surname,email,password) => {
        dispatch({
            type: 'secondaryAdd',
            name: name,
          surname: surname,
          email: email,
          password:password,
        })
    }

    const getItem = () => {
        dispatch({
            type: 'get',
        
        })
    }
    const login = (email,password) => {
        dispatch({
            type: 'login',
            email: email,
            password: password,
        })
    }

    

    return (
        <FitnessContext.Provider value={{detail,secondaryAdd,getItem,login}} >
            {children}
        </FitnessContext.Provider>
    )
}

const fitnessReducer = (detail, action) => {
    

    if (action.type === 'secondaryAdd') {
        let info;
        info =[...detail,{Name:action.name,Surname:action.surname,Email:action.email,Password:action.password,data:[]}]
   
        localStorage.setItem('data',JSON.stringify(info))
        return info;
    }
    if (action.type === 'get') {
        let data;
         
        data = JSON.parse(localStorage.getItem("data"));        
        
        if(data.length > 0) {
            return data;
        } else {
            return [];
        }
    }
    if (action.type === 'login') {
        {
            detail.map((itm) => {
                if (itm.Email === action.email) {
                    if (itm.Password === action.password) {
                        console.log('email and password matched')

                    } else { console.log('password not matched') }
                }
                return 
            })
            
        }
        return detail;
    }
}
