import { DELETE_PRODUCT, GET_PRODUCT, ADD_PRODUCT, VIEW_PRODUCT, UPDATE_PRODUCT } from "../type";

let initialState = {
    product: [],
    error: null,
    loading: false,
    id: null,

}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.product.filter(item => item.id !== action.payload),
                loading: false
            };

        case ADD_PRODUCT:
            const newProduct = [...state.product, action.payload]
            return {
                ...state,
                product: newProduct,
                loading: false
            }

        case VIEW_PRODUCT:
            return {
                ...state,
                id: action.payload,
                loading: false
            }

        case UPDATE_PRODUCT:
            return {
                ...state,
                product: state.product.map((e) => {
                    if (e.id === action.payload.id) {
                        return action.payload;
                    }
                    else {
                        return e;
                    }
                }),
                id: null
            }

        default:
            return state;

    }
}


