import * as fromProducts from '../constants/products';

const initialState = {
    products: {
        loading: false,
        data: null
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case fromProducts.LOAD_PRODUCTS:
            return { ...state, ...{ products: { ...state.products, loading: true } } };
        case fromProducts.LOAD_PRODUCTS_SUCCESS: 
            return { ...state, ...{ products: { loading: false, data: action.payload } } };
        case fromProducts.LOAD_PRODUCTS_ERROR:
            return { ...state, ...{ products: { ...state.products, loading: true } } };
        case fromProducts.NOT_LOAD_PRODUCTS:    
            return { ...state, ...{ products: { ...state.products, loading: false } } };
        default:
            return state;
    }
}