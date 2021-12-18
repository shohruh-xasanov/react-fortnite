import { toast } from 'react-toastify';

export function reducer (state, {type, payload}) {
    switch(type){
        case 'ADD_ORDER' : 
        let products= [];
        let newOrder = null;
        const index = state.order.findIndex(item => item[0].id === payload.id)
        if(index < 0){
            products.push(payload)
            newOrder = [...state.order, products]
            toast.success('Product add to cart')
                return {
                    ...state,
                    order : newOrder
            }
            
        }else{
            toast.error('Product is already added')     
            return state    
        }
        case "ADD_MODAL" : 
        return {
            ...state,
            modal : !state.modal
        };
        case "REMOVE_ORDER" :{
        const newArr = state.order.filter(item => item[0].id !== payload);
        return {
            ...state,
            order : newArr
        }
    };
        case "SET_GOODS" : {
            return {
                ...state,
                goods : payload || [],
                loading : false
            }
        }
    default:
        return state
}
}