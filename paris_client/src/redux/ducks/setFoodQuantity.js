// types
export const SET_FOOD_QUANTITY = "SET_FOOD_QUANTITY"

// actions
export const setFoodQuantityAction = (quantity) => ({
    type: SET_FOOD_QUANTITY,
    quantity: quantity
})

// initialstate
export const initialState = 0

// reducers
export const setFoodQuantityReducer = (state = initialState, { type, quantity }) => {
    switch (type) {

        case SET_FOOD_QUANTITY:
            return quantity
        default:
            return state
    }
}
