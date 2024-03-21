import { DELETE_PRODUCT, GET_PRODUCT } from "../type";

let initialState = {
    product : [],
    error : null,
    loading : false
}

export const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_PRODUCT:
            return {
                ...state,
                product : action.payload,
                loading : false    
            };

            case DELETE_PRODUCT:
                return {
                    ...state,
                    product : state.product.filter(item => item.id !== action.payload),                    
                    loading : false    
                }; 

            default:
                return state;
            
    }
}