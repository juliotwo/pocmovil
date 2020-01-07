
import React from 'react';
import { connect } from 'react-redux';

const ResultsAndFilters = (props) => {
        return (
            <div className="card-header border-0">
                <div className="row align-items-center">
                    <div className="col-9">
                        <h4 className="py-2">Resultados para "{props.prod}"</h4>
                        <h6 className="py-2">{props.numProds} productos encontrados</h6>
                    </div>
                    <div className="col-3 text-right">
                        <div className="actions">
                            <div className="icon-md">
                                <i className="la la-sort-amount-desc pr-2"></i>
                                <i className="la la-filter pr-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
};


const mapStateToProps = state => ({
    numProds: state.products.products.data.TotalRegistros,
    prod: state.products.products.product
});


export default connect(mapStateToProps)(ResultsAndFilters);
