import {combineReducers} from "redux"
import reducerProducts from "./PruductsData/ReducerProductsData"
import ReducerCartShopping from "./cartShopping/ReducerCartShopping"



const rootReducer=combineReducers({
    PruductsState:reducerProducts,
    cartShoppingState:ReducerCartShopping
})



export default rootReducer