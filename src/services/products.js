import enviroment from '../enviroment/index';

export default class ProductsService {

    static async GetProducts(pagina, query,liquidacion,tipoBusqueda) {
        // const response = await fetch(`${enviroment.ENDPOINT}?index=1&pag=${pagina}&plb=${query}&productosLiquidacion=${liquidacion}&regXPag=9&tpBusq=${tipoBusqueda}`, 
        const response = await fetch(`https://jtorresmm.github.io/BIM-JSON/products.json`, 
        {
            method: 'GET',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // }
        });
        const body = await response.json();

        if (body.errorMessage)
            throw body.errorMessage;
        return body;
    }

}