/**
 * Create Store and collect all Reducers to generate a global state
 * 
 * redux: "^4.1.2",
 * redux-devtools-extension: "^2.13.9",
 * redux-thunk: "^2.4.1",
 * redux-saga": "^1.1.3",
 */

import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga'

import { watcherSaga } from "./sagas/rootSaga";

import { composeWithDevTools } from "redux-devtools-extension"
import { setFoodNameReducer } from "./ducks/setFoodName";
import { setFoodQuantityReducer } from "./ducks/setFoodQuantity";
import { setFoodListReducer } from "./ducks/getFoodList";

const rootReducers = combineReducers({
    setFoodNameReducer: setFoodNameReducer, // set food name
    setFoodQuantityReducer: setFoodQuantityReducer, //set food quantity
    setFoodListReducer: setFoodListReducer, // get foods list

})

const sagaMiddleware = createSagaMiddleware()

const middleware = [
    sagaMiddleware
]

export const store = createStore (
    rootReducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(watcherSaga)