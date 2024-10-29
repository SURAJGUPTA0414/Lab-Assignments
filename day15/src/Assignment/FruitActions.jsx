import { ADD_FRUIT, REMOVE_FRUIT, DISPLAY_FRUIT } from "./FruitTypes";

export const addFruit = (fruit) => {
    return {
        type: ADD_FRUIT,
        payload: fruit  
    };
};

export const removeFruit = (fruitName) => {
    return {
        type: REMOVE_FRUIT,
        payload: { name: fruitName }  
    };
};

export const displayFruit = () => {
    return {
        type: DISPLAY_FRUIT
    };
};
