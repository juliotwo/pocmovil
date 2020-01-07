import React from 'react';

class ContainerListProducts extends React.Component {
    render() {
        return (
            <div className="card-body">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default ContainerListProducts