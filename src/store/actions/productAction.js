import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT } from "../type";
import axios from "axios";


//get-data
export const getDataSuccess = (data) => ({
    type : GET_PRODUCT,
    payload : data
})

export const getProduct = () =>{
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3003/product')
        dispatch(getDataSuccess(res.data))
    }
}

//delete-data
 export const deleteData = (id) => ({
    type : DELETE_PRODUCT,
    payload : id
    
})

export const deleteProduct = (id) =>{
    return async (dispatch) => {
        const res = await axios.delete(`http://localhost:3003/product/${id}`)
        console.log(res, "Delete");
        dispatch(deleteData(id))
    }
}
//add-data

export const addData = (data) =>({
    type : ADD_PRODUCT,
    payload : data,
})


export const addProduct = (productData) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3003/product', productData);
        dispatch(addData(res.data))
    }
}



