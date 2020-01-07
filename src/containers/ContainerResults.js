import React from 'react';

class ContainerResults extends React.Component {
    render() {
        return (
            <section className="py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow-none border-0">
                              {
                                  this.props.children
                              }        
                             </div>
                        </div>
                    </div>
                </div>
            </section>
                )
            } 
        };        
export default ContainerResults;
