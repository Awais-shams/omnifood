import React from 'react';
import './MealsShowCase.css';

const MealsShowCase = ({imageUrl,caption}) => {
    return (
        <ul className='meals-showcase'>
            <li>
                <figure className='meal-photo'>
                    <img src={imageUrl} alt={caption}/>
                </figure>
            </li>
        </ul>
    )
}

export default MealsShowCase;
