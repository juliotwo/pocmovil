import React from 'react'

class FooterWeb extends React.Component {
    render() {
        return (
            <>
                <div className="card-footer border-0">
                    <section className="slice py-4 bg-section-secondary">
                        <div className="container">
                            <nav aria-label="...">
                                <ul className="pagination  justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">Anterior</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item" aria-current="page">
                                        <a className="page-link" href="/">2 <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    <li className="page-item active">
                                        <a className="page-link" href="/">Siguiente</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                </div>
                <div className="visible-xxs clearfix pb-4">
                </div>
            </>
        )
    }
}

export default FooterWeb