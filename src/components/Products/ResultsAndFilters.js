
import React from 'react';

class ResultsAndFilters extends React.Component {
    render() {
        return (
            <div className="card-header border-0">
                <div className="row align-items-center">
                    <div className="col-9">
                        <h4 className="py-2">Resultados para "camara"</h4>
                        <h6 className="py-2">4 productos encontrados</h6>
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
    }
};
export default ResultsAndFilters;
