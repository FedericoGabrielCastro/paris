// types
export const GET_FOOD_LIST_SUCCESS = "GET_FOOD_LIST_SUCCESS"

// initialstate
export const initialState = ""

// reducers
export const setFoodListReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_FOOD_LIST_SUCCESS:
            return { ...state }

    default:
        return state
    }
}

// actions
export const getFoodListAction = () => {

}
