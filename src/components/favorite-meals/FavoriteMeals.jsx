import React, { Component } from 'react';
import ImageData from './ImageData';
import MealsShowCase from '../meals-showcase/MealsShowCase';
import './FavoriteMeals.css';

export class FavoriteMeals extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:ImageData
        }
    }
    
    render() {
        const {data}=this.state;
        return (
            <section className='section-meals'>
                {
                    data.map(({id,...otherProps})=><MealsShowCase key={id} {...otherProps}/>)
                }
                
            </section>
        )
    }
}

export default FavoriteMeals;


