/**
 * Create Store and collect all Reducers to generate a global state
 * 
 * redux: "^4.1.2",
 * redux-devtools-extension: "^2.13.9",
 * redux-thunk: "^2.4.1",
 */

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { setFoodNameReducer } from "./ducks/setFoodNameDuks";
import { setFoodQuantityReducer } from "./ducks/setFoodQuantityDuks";
import { setFoodListReducer } from "./ducks/getFoodList";

const rootReducers = combineReducers({
    setFoodNameReducer: setFoodNameReducer, // set food name
    setFoodQuantityReducer: setFoodQuantityReducer, //set food quantity
    setFoodListReducer: setFoodListReducer, // get foods list

})

export const store = createStore (
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
)
