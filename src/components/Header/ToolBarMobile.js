// import './Toolbar.scss';
import React from 'react';
import { connect } from 'react-redux';
import { initialSearch } from "../../redux/actions/products";


class HeaderMobile extends React.Component {
    constructor(props) {
        super(props)
        this.Search = this.Search.bind(this);
    }
    Search() {
        this.props.initialSearch()

    }
    render() {
        return (
            <div className="topbar-device-mobile hidden-lg hidden-md clearfix ">
                <div className="active-mobile">
                    <div className="topbar-mobile-history"><a href="/"><i className="la la-arrow-left"></i></a></div>
                </div>
                <div className="topbar-title text-dark">Resultados de búsqueda</div>
                <div className="top-right-mobile">
                    <div className="search-device" onClick={this.Search}>
                        <a id="search-icon" className="search-icon" href="/" data-action="omnisearch-open" data-target="#omnisearch"><i className="icon-buscar"></i></a>
                        <div className="omni-search-form omni-search-mobile">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps2 = dispatch => ({
    initialSearch: () => dispatch(initialSearch())
});
const mapStateToProps2 = state => ({
    loading: state.products.products.loading,

});

export default connect(mapStateToProps2,mapDispatchToProps2)(HeaderMobile)