import React from 'react'

class FooterMobile extends React.Component {
    render() {
        return (
            <div className="footer-device-mobile visible-xxs clearfix">
                <div className="device-home">
                    <a href="index.html">
                        <i className="icon-home"></i>
                        Inicio            </a>
                </div>
                <div className="device-home">
                    <a href = "/">
                        <i className="icon-categorias"></i>
                        Productos            </a>
                </div>
                <div className="device-home  ">
                    <a href="/">
                        <i className="icon-carrito"></i><span className="mini-cart-items">2</span>
                        Carrito            </a>
                </div>
                <div className="device-home ">
                    <a href="/">
                        <i className="icon-cliente-1"></i>
                        Cliente            </a>
                </div>
            </div>
        )
    }

}

export default FooterMobile