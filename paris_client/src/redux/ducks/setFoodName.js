// types
export const SET_FOOD_NAME = "SET_FOOD_NAME"

// actions
export const setFoodNameAction = (foodName) => ({
    type: SET_FOOD_NAME,
    foodName: foodName
})

// initialstate
export const initialState = ""

// reducers
export const setFoodNameReducer = (state = initialState, { type, foodName }) => {
    switch (type) {

        case SET_FOOD_NAME:
            return foodName
        default:
            return state
    }
}
