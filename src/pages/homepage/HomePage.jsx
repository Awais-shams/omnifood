import React from 'react';
import Header from '../../components/header/Header';
import Features from '../../components/features/Features';
import FavoriteMeals from '../../components/favorite-meals/FavoriteMeals';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Features/>
            <FavoriteMeals/>
        </div>
    )
}

export default HomePage;
