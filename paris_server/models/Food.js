const mongoose = require("mongoose")

// create schema 
const FoodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    foodAmount: {
        type: Number,
        required: true
    }
})

// pass schema into mongoose.
const Food = mongoose.model("Food", FoodSchema)

module.exports = Food