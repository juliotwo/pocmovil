import React from 'react';
import './Toolbar.scss';
import { connect } from 'react-redux';
import { exitSearch, fetchProducts } from "../../redux/actions/products";
import { withRouter } from "react-router-dom";

class SearchToolbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
    console.log("ROUTES",this.props)
  }
 
  _KeyPressed(event) {
    if (event.key === "Enter") {
      console.log("ENTER")
      this.props.history.push('/search/'+this.state.search)
      this.props.exitSearch()
      this.props.search(this.state.search)

    }
  }
  async _Search(event) {

    await this.props.search(this.state.search)

  }
  _OnChangeValue(event) {
    this.setState({ search: event.target.value });
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
                <input onKeyPress={event => this._KeyPressed(event)} onChange={event => this._OnChangeValue(event)} type="text" id="validationDefault01" className="form-control input-mask" placeholder="Ingresa los datos del producto o categoría" required="" autoComplete="off" />
                <div className="input-group-append">
                  <a href={`/search/${this.state.search}`} className="btn btn-block btn-neutral border-left-0"> <i className="icon-buscar"></i></a>
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
  search: (query) => dispatch(fetchProducts(query))
});
const mapStateToProps = state => ({
  loading: state.products.products.loading,
  state: state
});

withRouter(SearchToolbar)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter (SearchToolbar));

