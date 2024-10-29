
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFruit, removeFruit, displayFruit } from './FruitActions';

function FruitContainer() {
    const fruits = useSelector(state => state.fruits);
    const dispatch = useDispatch();

    const newFruit = {
        name: 'banana',
        price: 'Rs.50/kg',
        date: '2024-11-30'
    };

  
    const [isVisible, setIsVisible] = useState(false);

  
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h1>Fruit Store</h1>
            {isVisible && ( 
                fruits.length > 0 ? (
                    fruits.map((fruit, index) => (
                        <div key={index}>
                            <p>Name: {fruit.name}</p>
                            <p>Price: {fruit.price}</p>
                            <p>Date: {fruit.date}</p>
                        </div>
                    ))
                ) : (
                    <p>No fruits available</p>
                )
            )}
            <button onClick={() => dispatch(addFruit(newFruit))}>Add Fruit</button>
            <button onClick={() => dispatch(removeFruit())}>Remove Mango</button>
            <button onClick={toggleVisibility}>{isVisible ? 'Hide Fruits' : 'Display Fruits'}</button>
        </div>
    );
}

export default FruitContainer;
