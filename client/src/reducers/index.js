import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import productsReducer from './products';

export default combineReducers({
    basketState: basketReducer,
    products: productsReducer,
});
