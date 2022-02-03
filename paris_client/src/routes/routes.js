/**
 * Mange routes.
 * 
 * React-router-dom "^6.2.1".
 */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../views/HomePage/HomePage';
// import NavigationAndFooterContent from '../components/Layouts/NavigationAndFooterContent';

export const CustomRoutes = () => {
    
    return (
        <BrowserRouter>
            {/* <NavigationAndFooterContent> */}
                <Routes>
                    {/* Public Route */}
                    <Route exact path={"/"} element={<HomePage />} />
                </Routes>
            {/* </NavigationAndFooterContent> */}
        </BrowserRouter>
    ) 
} 
