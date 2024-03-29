import { combineReducers } from "redux";
import { productReducer } from "./productReducer";


 const rootReducer = combineReducers({
    Data : productReducer
})

export default rootReducer;
