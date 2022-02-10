const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()


const FoodModel = require("./models/Food") 

// conect with mongoose
const urlMongoose = "mongodb+srv://newUser:tumama28@crudappmern.2agbe.mongodb.net/food?retryWrites=true&w=majority"

mongoose.connect(urlMongoose, {
    useNewUrlParser: true,
})

// middleware
app.use(express.json()) // call info from frontend and return as json.
app.use(cors()) // comunicate API

// send info to frontend
app.post("/food/insert" ,async(req, res) => {

    // info from form frontend
    const foodName = req.body.foodName
    const quantity = req.body.quantity

    const food = new FoodModel(
        { foodName: foodName, foodAmount: quantity}) // create new data

    try {
        await food.save() // save information into "food" folder in mongoAtlas
        res.send("Insert data")
    } catch (error) {
        console.log(error)
    }
})

// get info from food form
app.get("/food/read" ,async(req, res) => {

    FoodModel.find({}, (error, result) => {
        if(error) {
            res.send(error)
        }

        res.send(result)
    })
})

// update data food
app.put("/food/update" ,async (req, res) => {

    // info from form frontend
    const newFoodName = req.body.newFoodName
    const id = req.body.id

    try {
        await FoodModel.findById(id, (error, updatedFood) => {
            updatedFood.foodName = newFoodName
            updatedFood.save()
            res.send("update food name")
        })
    } catch (error) {
        console.log(error)
    }
})

// delete food
app.delete("/food/delete/:id" ,async (req, res) => {
    const id = req.params.id

    await FoodModel.findByIdAndRemove(id).exec()
    res.send("delete food")
})

// run server
app.listen(8000, () => {
    console.log("Servidor en puerto 8000")
})