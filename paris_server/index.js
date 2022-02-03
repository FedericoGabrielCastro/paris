const express = require("express")
const mongoose = require("mongoose")

const app = express()

const FoodModel = require("./models/Food") 

// conect with mongoose
const urlMongoose = "mongodb+srv://newUser:tumama28@crudappmern.2agbe.mongodb.net/food?retryWrites=true&w=majority"

mongoose.connect(urlMongoose, {
    useNewUrlParser: true,
})

// middleware
app.use(express.json()) // call info from frontend and return as json.

// send info to frontend
app.get("/" ,async(req, res) => {
    const food = new FoodModel({ foodName: "Manzana", foodAmount: 3}) // create new data

    try {
        await food.save() // save information into "food" folder in mongoAtlas
        res.send("Insert data")
    } catch (error) {
        console.log(error)
    }
})

// run server
app.listen(8000, () => {
    console.log("Servidor en puerto 8000")
})