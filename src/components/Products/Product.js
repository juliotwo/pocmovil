import React, { useState } from 'react'
import CreditSVG from '../../assets/images/credito.svg'
import CatextSVG from '../../assets/images/catext.svg'

export const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0

    }).format(value);


function Product(props) {
    const [productState] = useState(props.product.product);


    return (
        <div className="col-xl-3 col-lg-4 col-md-4 col-xs-6">
            <div className="card card-product shadow-none">
                <div className="card-header border-0">
                    {productState.TipoProducto === 1 ?
                        <h6 className="font-weight-500"><a href="/#">{productState.Nombre}</a>
                        </h6> :
                        <div className="row align-items-start">
                            <div className="col-9 pr-0">
                                <h6 className="font-weight-500 topbar-title"><a href="/#">{productState.Nombre}</a></h6>
                            </div>
                            <div className="col-3 pr-1">
                                <div className="text-right">
                                    <div className="" data-toggle="tooltip" data-title="Catálogo Extendido" data-original-title="" title="">
                                        <img alt="imagen del catalogo" src={CatextSVG} className="img-fluid img-right" style={{ height: 30 + "px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="card-image">
                    <a href="/#">
                        <img alt="imagen del producto" onError="this.src='https://elektra.vteximg.com.br/arquivos/ids/393169-1000-1000/2004184.jpg'"
                            src={productState.ImagenUrl}
                            className="img-center img-fluid-v" />
                    </a>
                </div>
                <div className="card-body text-left pt-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="text-precio-total mb-0">{numberFormat(productState.PrecioChazz)}</p>
                        <p className="text-sku mb-0">SKU: {productState.Sku}</p>
                    </div>
                    {productState.PrecioChazz === productState.PrecioLista ?? <div className="pb-2"><small className="text-sku text-muted"><del>{numberFormat(productState.PrecioLista)}</del></small>
                    </div>}

                    <div className="row">
                        <div className="col-6 text-left">
                            <div className="">
                                <img alt="imagen del credito" src={CreditSVG}
                                    className="img-fluid" style={{ width: 200 + 'px' }} />
                            </div>
                            <p className="text-muted text-title-card-v2 font-weight-normal mb-0 lh-120">Pago
                           puntual a {productState.Plazo} semanas</p>
                        </div>
                        <div className="col-6 text-right">
                            <small className="h3 text-success font-weight-500 mb-0 mb-0">{numberFormat(productState.AbonoPuntual)}</small>
                        </div>
                    </div>
                </div>
                <div className="card-footer py-0 border-0 overflow-hidden text-center mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="/#" className="nav-link text-muted icon-sg " data-toggle="tooltip"
                                    data-title="Entrega en tienda" data-original-title="" title="">
                                    {productState.TipoProducto === 1 ? <><i className="icon-shop mr-2"></i><span className="text-sku text-muted">{productState.Inventario}</span> </>:<> <i class="icon-ekt-envia mr-2"></i><span class="text-sku text-muted">{productState.Inventario}</span></>}
                                    
                                </a>
                            </li>
                        </ul>
                        <div className="text-right">
                            <div>
                                <a href="/#" className="btn btn-success btn-block"> <span
                                    className="btn-inner--text">Agregar</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Product