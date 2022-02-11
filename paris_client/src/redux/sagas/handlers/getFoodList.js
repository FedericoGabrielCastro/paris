import { call, put } from "redux-saga/effects"
import { getFoodListAction } from "../../ducks/getFoodList"
import { requestGetFoodList } from "../request/getFoodList"

export function* handlerGetFoodList() {
    
    try {
        const response = yield call(requestGetFoodList)
        const { data } = response
        yield put(getFoodListAction(data))
    } catch (error) {
        console.log(error)
    }
}