import React from 'react';
// import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import HeaderToolbar from './components/Header/Toolbar';
import PageResults from './containers/ContainerPageResults';
import './styles/index.scss';
import store from "./redux/store/store";
import HomePage from './containers/HomePage';
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                <Router>
                    <HeaderToolbar></HeaderToolbar>

                    <Switch>
                        <Route  path="/search/:search" render={(props) => 
                            <PageResults search={props.match.params.search} />
                        } />



                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </Router>
                </HashRouter>
            </Provider>
        )
    }
}

export default App;
