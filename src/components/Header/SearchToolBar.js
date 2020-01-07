import React from 'react';
import './Toolbar.scss';
import { connect } from 'react-redux';
import { exitSearch,fetchProducts } from "../../redux/actions/products";

class SearchToolbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search : ""
    }
    
    // this.ExitSearch = this.ExitSearch.bind(this);
  }

  async _Search(event){
  
    await this.props.search(this.state.search)
   
  }
  _OnChangeValue(event){
    this.setState({search: event.target.value});
  }
  _ExitSearch(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      this.props.exitSearch()
    }
  }
  
  render() {
    return (
      <>
        <div className={this.props.loading ? "modal2" : "modal"} onClickCapture={(event) => { this._ExitSearch(event) }}>
        </div>
        <div id="omnisearch"
          className={this.props.loading ? "omnisearch show" : "omnisearch"}
        >
          <div className="container">
            <div className="omnisearch-form">
              <div className="input-group input-group-md input-group-merge">
                <input onChange={event => this._OnChangeValue(event)}  type="text" id="validationDefault01" className="form-control input-mask" placeholder="Ingresa los datos del producto o categoría" required="" autoComplete="off" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-block btn-neutral icon-sm border-left-0" onClick={(event) => { this._Search(event) }}><i className="icon-buscar"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  exitSearch: () => dispatch(exitSearch()),
  search:(query) => dispatch(fetchProducts(query))
});
const mapStateToProps = state => ({
  loading: state.products.products.loading,
  state:state
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchToolbar);

