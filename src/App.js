import React from 'react';
// import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderToolbar from './components/Header/Toolbar';
import PageResults from './containers/ContainerPageResults';
import './styles/index.scss';
import store from "./redux/store/store";
import HomePage from './containers/HomePage';
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
               
                <Router>
                    <HeaderToolbar></HeaderToolbar>

                    <Switch>
                        <Route path="/search/:search" render={(props) => 
                            <PageResults {...props} search={props.match.params.search} />
                        } />



                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </Router>
                
            </Provider>
        )
    }
}

export default App;
