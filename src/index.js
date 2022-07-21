import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from "./components/Header";

import store from './store/store';

import Home from './pages/Home/Home';
import Searchresult from './pages/Searchresult/Searchresult';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/Searchresult" component={Searchresult} exact/>
                </Switch>
            </div>

        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
