import Axios from "axios"

// types
export const GET_FOOD_LIST = "GET_FOOD_LIST"
export const SET_FOOD_LIST = "SET_FOOD_LIST"

// actions
export const getFoodListAction = (foodList) => ({
    type: GET_FOOD_LIST,
    foodList
})

export const setFoodListAction = () => ({
    type: SET_FOOD_LIST
})

// initialstate
export const initialState = {
    foodList: []
}

// reducers
export const setFoodListReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FOOD_LIST:
            const { foodList } = action
            return { ...state, foodList }

    default:
        return state
    }
}

