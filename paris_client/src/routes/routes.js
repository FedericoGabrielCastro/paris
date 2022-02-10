/**
 * Mange routes.
 * 
 * React-router-dom "^6.2.1".
 */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodPage from '../views/FoodPage/FoodPage';

import HomePage from '../views/HomePage/HomePage';

export const CustomRoutes = () => {
    
    return (
        <BrowserRouter>
                <Routes>
                    {/* Public Route */}
                    <Route exact path={"/"} element={<HomePage />} />
                    <Route exact path={"/food"} element={<FoodPage />} />
                </Routes>
        </BrowserRouter>
    ) 
} 
