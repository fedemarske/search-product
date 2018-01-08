import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Result from './Result';
import Search from './Search';
import Details from './Details';

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Route path="/" component={Search} />
            <Route exact path="/items" component={Result} />
            <Route exact path="/items/:id" component={Details}/>
        </div>
    </BrowserRouter>
);

export default App;
