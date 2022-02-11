import { takeLatest } from "redux-saga/effects"

import { SET_FOOD_LIST } from "../ducks/getFoodList"
import { handlerGetFoodList } from "./handlers/getFoodList"

export function* watcherSaga(){
    
    yield takeLatest(SET_FOOD_LIST, handlerGetFoodList)
}