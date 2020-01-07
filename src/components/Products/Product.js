import React from 'react'
import CreditSVG from '../../assets/images/credito.svg'
class Product extends React.Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-xs-6">
                <div className="card card-product shadow-none">
                    <div className="card-header border-0">
                        <h6 className="font-weight-500"><a href="#">Cámara Fotográfica Canon EOS 1300D HDMI</a>
                        </h6> 
                        {/* {this.props.data.TipoProducto == 1 ?
                            <h6 className="font-weight-500"><a href="#">Cámara Fotográfica Canon EOS 1300D HDMI</a>
                            </h6> :
                            <div class="row align-items-start">
                                <div class="col-9 pr-0">
                                    <h6 class="font-weight-500 topbar-title"><a href="#">Cámara Fotográfica Nikon Coolpix P900</a></h6>
                                </div>
                                <div class="col-3 pr-1">
                                    <div class="text-right">
                                        <div class="" data-toggle="tooltip" data-title="Catálogo Extendido" data-original-title="" title="">
                                            <img alt="Image placeholder" src="assets/media/catext.svg" class="img-fluid img-right" style="height:30px;" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        } */}
                    </div>
                    <div className="card-image">
                        <a href="#">
                            <img alt="Image placeholder"
                                src="https://elektra.vteximg.com.br/arquivos/ids/393169-1000-1000/2004184.jpg"
                                className="img-center img-fluid-v" />
                        </a>
                    </div>
                    <div className="card-body text-left pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-precio-total mb-0">$8,999</p>
                            <p className="text-sku mb-0">SKU: 2004210</p>
                        </div>
                        <div className="pb-2"><small className="text-sku text-muted"><del>$10,599</del></small>
                        </div>
                        <div className="row">
                            <div className="col-6 text-left">
                                <div className="">
                                    <img alt="Image placeholder" src={CreditSVG}
                                        className="img-fluid" style={{ width: 200 + 'px' }} />
                                </div>
                                <p className="text-muted text-title-card-v2 font-weight-normal mb-0 lh-120">Pago
                           puntual a 102 semanas</p>
                            </div>
                            <div className="col-6 text-right">
                                <small className="h3 text-success font-weight-500 mb-0 mb-0">$435</small>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer py-0 border-0 overflow-hidden text-center mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="#!" className="nav-link text-muted icon-sg " data-toggle="tooltip"
                                        data-title="Entrega en tienda" data-original-title="" title="">
                                        <i className="icon-shop mr-2"></i><span className="text-sku text-muted">2</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="text-right">
                                <div>
                                    <a href="#" className="btn btn-success btn-block"> <span
                                        className="btn-inner--text">Agregar</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Product