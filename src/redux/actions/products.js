import * as fromProducts from '../constants/products';
import ProductsService from '../../services/products';
// import LeaguesService from '../../services/leagues';

export function loadProducts() {
    return {
        type: fromProducts.LOAD_PRODUCTS
    };
}
export function notLoadProducts() {
    return {
        type: fromProducts.NOT_LOAD_PRODUCTS
    };
}

export function loadProductsSuccess(payload) {
    return {
        type: fromProducts.LOAD_PRODUCTS_SUCCESS,
        payload
    };
}

export function laodProductsError(payload) {
    return {
        type: fromProducts.LOAD_PRODUCTS_ERROR,
        payload
    };
}
// index -> default 1
// pagina
// plp -> Criterio busqueda
// liquidacion -> true o false
// rgpagina ->num de elementos por pagina deseado 9
// tipo de busqueda -> 1 2 3 o 4

export function fetchProducts(pagina="0", query,liquidacion="false",tipoBusqueda="4"){
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(loadProducts());
            ProductsService.GetProducts(pagina, query,liquidacion,tipoBusqueda)
            .then(leagues =>{
                dispatch(loadProductsSuccess(leagues));
                resolve(leagues);
            })
            .catch(error => {
                dispatch(laodProductsError(error));
                reject(error);

            })
        })
    }
}
export function initialSearch(){
    return dispatch => {        
            dispatch(loadProducts());
    }
}
export function exitSearch(){
    return dispatch => {        
            dispatch(notLoadProducts());
    }
}