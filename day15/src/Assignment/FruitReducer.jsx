import { ADD_FRUIT, REMOVE_FRUIT, DISPLAY_FRUIT } from "./FruitTypes";

const initialState = {
    fruits: [
        {
            name: 'Mango',
            price: 'Rs.80/kg',
            date: '2024-11-23'
        }
    ]
};

const FruitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRUIT:
            return {
                ...state,
                fruits: [...state.fruits, action.payload]
            };
        case REMOVE_FRUIT:
            return {
                ...state,
                fruits: state.fruits.slice(0, -1), 
            };
        case DISPLAY_FRUIT:
            return state;
        default:
            return state;
    }
};

export default FruitReducer;
