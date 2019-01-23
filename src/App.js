import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Router from './components/Router'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import Header from './components/Header'
import ProductListContainer from './containers/ProductListContainer'
import MainPage from './components/MainPage'
import HeaderContainer from './containers/HeaderContainer';


const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Router>
          <div>
            <HeaderContainer/>
            <Route path="/" exact component={MainPage} />
            <Route path="/about/" component={ProductListContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
