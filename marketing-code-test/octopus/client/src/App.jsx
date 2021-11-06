// Node Modules
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

// Components - all pages
import Header from './components/header'
import Footer from './components/footer'

// Components - route pages
import Home from './routes/home/home'
import Product from "./routes/products/product"
import NotFound from "./routes/notFound/notfound"
import BasketModal from './components/basketModal';

const App = () => {
    return (
        <>
        <BasketModal />
        <div id="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/product" component={Product} />
                <Route path="/notfound" component={NotFound} />
                <Redirect to="/notfound" />
            </Switch>
            <Footer />
        </div>
        </>
    )
};

export default App;
