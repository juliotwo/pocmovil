import React from 'react';
import ContainerResults from './ContainerResults';
import ResultsAndFilters from '../components/Products/ResultsAndFilters'
import HeaderPage from "../components/Header/HeaderPage";
import ContainerListProducts from './ConteinerListProducts';
import Product from '../components/Products/Product'
import FooterWeb from '../components/Footer/FooterWeb';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { connect } from 'react-redux';

import { useParams} from "react-router";
import { fetchProducts } from '../redux/actions/products';



function ListProductItem(props) {
    // Correcto! No hay necesidad de especificar la key aquí:
    return <Product product={props} ></Product>;
}

function ProductList(props) {
    const products = props.ResultadoProductos;
    const listItems = products.map((product,index) =>
        // Correcto! La key debería ser especificada dentro del array.
        <ListProductItem key={index}
        product ={product} />

    );
    return (
        <ContainerListProducts>
            {listItems}
        </ContainerListProducts>
    );
}
class ContainerPageResults extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.props.searchProd(this.props.search)
    }
    
   
    render() {
        return (
            <div className="main-content">
                <div className=" padding-topbar-xs hidden-lg hidden-md"></div>
                <HeaderPage></HeaderPage>
                <ContainerResults>
                    {
                        this.props.data != null ? <>
                        <ResultsAndFilters producto = {this.props.prod} numProductos = {this.props.data.TotalRegistros} />
                        <ProductList ResultadoProductos={this.props.data.ResultadoProductos} />
                        <FooterWeb/>
                        </>: <div><h2>No hay resultados</h2></div>
                    }

                </ContainerResults>

            </div>
        )
    }
};



const mapStateToProps = state => ({
    loading: state.products.products.loading,
    data: state.products.products.data,
    prod: state.products.products.product
});

const mapDispatchToProps = dispatch => ({
    searchProd:(query) => dispatch(fetchProducts(query))
});
export default connect(mapStateToProps,mapDispatchToProps)(ContainerPageResults);
