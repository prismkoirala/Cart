import { GET_NUMBERS_BASKET } from './types';
import axios from 'axios' 

export const getNumbers =  () => 
    async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:5000/api/products');
            dispatch({
                type: GET_NUMBERS_BASKET,
                payload: res.data
            });
    
        } catch (error) {
            console.log(JSON.stringify(error.message));  
        } 
    };

