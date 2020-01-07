import React from 'react'
import omnipos from '../../assets/images/omnipos.svg'

class HomeSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          search: ""    
        };
    }
    _OnChangeValue(event){
        this.setState({search: event.target.value});
    }

    render() {
        return (
            <div className="main-content">
                <section className="slice py-4">
                    <div className=" padding-topbar-xs hidden-lg"></div>
                    <div className="d-flex align-items-center">
                        <div className="container">
                            <div className="row row-grid align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center">
                                        <div className="text-center">
                                            <img alt="imagen del logo" src={omnipos} className="img-fluid img-center" style={{height:150 +"px", width:250+"px" }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="slice">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">

                                <ul className="nav nav-tabs nav-fill">
                                    <li className="nav-item">
                                        <a id="button-app-result-tab" data-toggle="tab" href="#producto" role="tab" aria-controls="button-app-result" aria-selected="false" className="nav-link h6 pl-0 active">Producto</a>
                                    </li>
                                </ul>
                                <div className="tab-content mt-3">
                                    <div id="producto" className="tab-pane tab-example-html fade active show" role="tabpanel">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group input-group-lg input-group-merge">
                                                        <input onChange={event => this._OnChangeValue(event)} type="text" id="validationDefault01" className="form-control input-mask" placeholder="Ingresa los datos del producto" required="" autoComplete="off" />
                                                        <div className="input-group-append">
                                                            <a href={`search/${this.state.search}`} className="btn btn-block btn-neutral border-left-0"> <i className="icon-buscar"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomeSearch