import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Result from './Result';
import Search from './Search';
import Details from './Details';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route path="/" component={Search} />
                <Route path="/search" component={Result} />
                <Route path="/details/:id" component={Details}/>
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;