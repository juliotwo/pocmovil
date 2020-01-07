import * as fromProducts from '../constants/products';

const initialState = {
    products: {
        loading: false,
        data: null,
        product: ""
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case fromProducts.LOAD_PRODUCTS:
            return { ...state, ...{ products: { ...state.products, loading: true } } };
        case fromProducts.LOAD_PRODUCTS_SUCCESS: 
            console.log("SUCCES",action.prouctName)
            return { ...state, ...{ products: { loading: false, data: action.payload, product:action.prouctName } } };
        case fromProducts.LOAD_PRODUCTS_ERROR:
            return { ...state, ...{ products: { ...state.products, loading: true } } };
        case fromProducts.NOT_LOAD_PRODUCTS:    
            return { ...state, ...{ products: { ...state.products, loading: false } } };
        default:
            return state;
    }
}