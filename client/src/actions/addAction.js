import axios from 'axios';
import { ADD_PRODUCTS_BASKET } from './types';

export const addBasket = (productName) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/api/products', {
            name: productName,
        });

        dispatch({
            type: ADD_PRODUCTS_BASKET,
            payload: res.data.name,
        });
    } catch (error) {
        console.log(JSON.stringify(error.message));
    }
};
