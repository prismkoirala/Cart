import { FETCH_PRODUCTS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
};
