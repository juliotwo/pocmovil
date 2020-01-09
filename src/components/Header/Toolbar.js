// import './Toolbar.scss';
import React from 'react';
import logo from './elektra_logo.svg';
import ModalSearch from './SearchToolBar';
import { connect } from 'react-redux';
import { initialSearch } from "../../redux/actions/products";
import HeaderMobile from './ToolBarMobile'
import FooterMobile from '../Footer/FooterMobile';
import { withRouter } from 'react-router-dom';




class HeaderToolbar extends React.Component {
    constructor(props) {
        super(props)
        console.log("tool",this.props)
        this.Search = this.Search.bind(this);
    }
    Search() {
        this.props.initialSearch()

    }

    render() {
        return (
            <>
                <HeaderMobile ></HeaderMobile>
                <FooterMobile></FooterMobile>
                <ModalSearch show={this.props.loading}></ModalSearch>
                <header
                    id="omni-header"
                    className="site-header hidden-sm hidden-xs py-3">
                    <div className="header-main">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="header-logo col-lg-6 col-md-6">
                                    <div className="logo">
                                        <a href="/">
                                        <img alt="Logo" src={logo} width="120px" />
                                        </a>
                                    </div>
                                </div>
                                <div className="header-right col-lg-6">
                                    <div className="ml-auto">
                                        <ul className="nav align-items-center">
                                            <li className="d-none d-lg-inline-block nav-item pr-4" >
                                                <span
                                                    data-toggle="tooltip"
                                                    data-title="Buscar productos"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title="">
                                                    <a
                                                        href="#"
                                                        onClick={this.Search}
                                                        data-action="omnisearch-open"
                                                        data-target="#omnisearch"
                                                        className="action-item nav-link btn btn-nav border-0 icon-nav">
                                                        <i className="icon-buscar"></i>
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="d-none d-lg-inline-block nav-item pr-4">
                                                <span
                                                    data-toggle="tooltip"
                                                    data-title="Agregar código postal"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title="">
                                                    <a
                                                        href="#!"
                                                        data-toggle="modal"
                                                        data-target="#codigopostal"
                                                        className="action-item nav-link btn btn-nav border-0 icon-nav">
                                                        <i className="icon-postal"></i>
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="d-none d-lg-inline-block nav-item pr-4">
                                                <span
                                                    data-toggle="tooltip"
                                                    data-title="Agregar cliente"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title="">
                                                    <a
                                                        href="#!"
                                                        data-toggle="modal"
                                                        data-target="#agregar-cliente"
                                                        className="action-item nav-link btn btn-nav border-0 icon-nav"
                                                    >
                                                        <i className="icon-agregar-cliente"></i>
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="nav-item top-device-mobile pr-4">
                                                <span
                                                    data-toggle="tooltip"
                                                    data-title="Carrito"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <a
                                                        href="#modal-cart"
                                                        data-toggle="modal"
                                                        className="nav-link btn btn-nav border-0 icon-nav"
                                                    >
                                                        <i className="icon-carrito"></i>
                                                        <span className="mini-cart-items">
                                                            2
                                                        </span>
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="d-none d-lg-inline-block nav-item pr-4">
                                                <span
                                                    data-toggle="tooltip"
                                                    data-title="Categorías"
                                                    data-placement="bottom"
                                                    data-original-title=""
                                                    title=""
                                                >
                                                    <a
                                                        href="/#!"
                                                        data-toggle="modal"
                                                        data-target="#agregar-cliente"
                                                        className="action-item nav-link btn btn-nav border-0 icon-nav"
                                                    >
                                                        <i className="icon-categorias"></i>
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }

};



const mapDispatchToProps = dispatch => ({
    initialSearch: () => dispatch(initialSearch())
});
const mapStateToProps = state => ({
    loading: state.products.products.loading,

});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderToolbar);
