import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App"
import './app.css'
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import About from './components/about/About'
import AdminPage from './pages/Admin'
import ProductView from './components/products/product-view/ProductView'
import Footer from './components/footer/Footer';
import Signin from './pages/auth/Signin';

function App()  {
    return (
        <BrowserRouter>
        <div></div>
           <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/product/:id' component={ProductView} />
                <Route exact path='/about' component={About} />
                <Route exact path='/sign-in' component={Signin} />
                <Route exact path='/admin' component={AdminPage} />
            </Switch>
            <Footer />
        </BrowserRouter>
        
    );
}

export default App
