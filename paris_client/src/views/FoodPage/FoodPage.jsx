/**
 * Render the Food page component
 * 
 * react-redux": "^7.2.6",
 * axios": "^0.25.0",
 */
import React, { useState, useEffect, useCallback }  from 'react';
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"

import { setFoodNameAction } from '../../redux/ducks/setFoodName';
import { setFoodQuantityAction } from '../../redux/ducks/setFoodQuantity'
import { setFoodListAction } from '../../redux/ducks/getFoodList'; 

const FoodPage = () => {

    const dispatch = useDispatch()

    const foodName = useSelector(store => store.setFoodNameReducer) // set food name
    const quantity = useSelector(store => store.setFoodQuantityReducer) // set food quantity
    const foodList = useSelector(store => store.setFoodListReducer.foodList) // get food list

    const [newFoodName, setNewFoodName] = useState("")
    
    useEffect(() => {
        dispatch(setFoodListAction())
    }, [dispatch, foodList])
    
    // set food name 
    const setFoodName = useCallback(event => {
        console.log("foodName: " + event.target.value)
        dispatch(setFoodNameAction(event.target.value))
    },[dispatch])

    // set food quantity
    const setQuantity = useCallback(event => {
        console.log("quantity: " + event.target.value)
        dispatch(setFoodQuantityAction(event.target.value))
    },[dispatch])

    // add info to database
    const addToList = () => {
        Axios.post("http://localhost:8000/food/insert",{
            foodName: foodName,
            quantity: quantity
        })
    }

    // update food name 
    const updateFood = (id) => {
        Axios.put("http://localhost:8000/food/update", {
            id: id,
            newFoodName: newFoodName
        })
    }

    // delete food 
    const deleteFood = (id) => {
        Axios.delete(`http://localhost:8000/food/delete/${id}`,)
    }
 
    return (
        <main>
            <h1> Comidas </h1>
            <label> Nombre de la comida: </label>
            <input
                type="text"
                onChange={setFoodName}
            />
            <label>Cantidad:</label>
            <input 
                type="number"
                onChange={setQuantity}
            />
            <button onClick={addToList}> Agregar a la lista </button>
            <hr></hr>
            {
                foodList.map((value, index) => {
                    return (
                        <div key={index}>
                            <p>{value.foodName} {value.foodAmount}</p>
                            <input 
                                type="text"
                                placeholder="modificar nombre"
                                onChange={(event) => {
                                    setNewFoodName(event.target.value)
                                }}
                            />
                            <button onClick={() => updateFood(value._id)}> Modificar </button>
                            <button onClick={() => deleteFood(value._id)}>Borrar</button>
                        </div>
                    )
                })
            }
        </main>
    )
};

export default FoodPage;
