import React from 'react';

class HeaderPage extends React.Component {
    render() {
        return (
            <section className="py-2 delimiter-bottom bg-secondary hidden-md hidden-sm hidden-xs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb" className="">
                                <ol className="breadcrumb breadcrumb-links text-sm px-0">
                                    <li className="breadcrumb-item"><a href="index.html">Inicio</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Resultados de búsqueda</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 text-right">
                            <div className="d-none d-lg-inline-block">
                                <div className="row align-items-center">
                                    <a href="/"><i className="la la-arrow-left"></i><span
                                        className="pl-3">Regresar</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeaderPage