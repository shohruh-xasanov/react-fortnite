import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initalState = {
    goods : [],
    loading : true,
    order : [],
    modal : false
}
export const  ShopContext = createContext()


export const ContextProvider =({children}) => {

   const [value, dispatch] = useReducer(reducer, initalState)

    value.addOrder = (item) => {
        dispatch({type:"ADD_ORDER", payload:item})
    }

    value.addModal = () => {
        dispatch({type:"ADD_MODAL"})
    }
    value.removeOrder = (id) => {
        dispatch({type:"REMOVE_ORDER", payload:id})
    }
    value.setGoods = (item) => {
        dispatch({type:"SET_GOODS", payload:item})
    }
    return(
        <ShopContext.Provider value={value}>
        {children}
        </ShopContext.Provider>
    )
}