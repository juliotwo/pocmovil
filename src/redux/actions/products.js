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

export function loadProductsSuccess(payload,prouctName) {
    return {
        type: fromProducts.LOAD_PRODUCTS_SUCCESS,
        payload,
        prouctName
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

export function fetchProducts(query,pagina="0",liquidacion="false",tipoBusqueda="4"){
    console.log(pagina,query,liquidacion,tipoBusqueda)
    return dispatch => {
        return new Promise((resolve, reject) => {
            ProductsService.GetProducts(pagina, query,liquidacion,tipoBusqueda)
            .then(products =>{
                console.log("QUERY",query)
                dispatch(loadProductsSuccess(products,query));
                resolve(products);
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