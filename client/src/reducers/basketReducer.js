import {
    ADD_PRODUCTS_BASKET,
    GET_NUMBERS_BASKET,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_PRODUCT,
} from '../actions/types';

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        Makeup: {
            name: 'Makeup',
            price: 10.03,
            numbers: 0,
            inCart: false,
        },
        Brushes: {
            name: 'Brushes',
            price: 15.03,
            numbers: 0,
            inCart: false,
        },
        Polisher: {
            name: 'Polisher',
            price: 5.0,
            numbers: 0,
            inCart: false,
        },
        Liner: {
            name: 'Liner',
            price: 25.03,
            numbers: 0,
            inCart: false,
        },
    },
};

export default (state = initialState, action) => {
    let productSelected = '';
    switch (action.type) {
        case ADD_PRODUCTS_BASKET:
            productSelected = { ...state.products[action.payload] };
            productSelected.numbers += 1;
            productSelected.inCart = true;

            return {
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                },
            };
        case GET_NUMBERS_BASKET:
            return {
                ...state,
                products: action.payload
            };
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] };
            productSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                },
            };
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] };
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if (productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost;
                newBasketNumbers = state.basketNumbers;
            } else {
                productSelected.numbers -= 1;
                newCartCost =
                    state.cartCost - state.products[action.payload].price;
                newBasketNumbers = state.basketNumbers - 1;
            }
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                },
            };
        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload] };
            let numberBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                basketNumbers: state.basketNumbers - numberBackup,
                cartCost: state.cartCost - numberBackup * productSelected.price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                },
            };
        default:
            return state;
    }
};
