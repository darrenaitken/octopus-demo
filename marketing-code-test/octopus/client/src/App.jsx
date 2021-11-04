// Node Modules
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

// Components - all pages
import Header from './components/header'
import Footer from './components/footer'

// Components - route pages
import Home from './routes/home/home'
import Products from "./routes/products/products"
import NotFound from "./routes/notFound/notfound"

const App = () => {
    return (
        <div id="App">
            <Header />
            <div className="contentContainer">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/notfound" component={NotFound} />
                <Redirect to="/notfound" />
            </Switch>
            </div>
            <Footer />
        </div>
    )
};

export default App;
