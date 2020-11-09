import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App";
import "./app.css";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import About from "./components/about/About";
import AdminPage from "./pages/Admin";
import ProductView from "./components/products/product-view/ProductView";
import Footer from "./components/footer/Footer";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import { createUserProfileDocument } from "./firebase/config";
import { auth } from "./firebase/config";
import { productData } from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      products: [],
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const newProduct = JSON.parse(JSON.stringify(productData));
    this.setState({ products: newProduct });

    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  handleProductSearch = (e) => {
    const { value } = e.target;
    const data = [...this.state.products];
    if (value) {
      const newProduct = [];
      data.forEach((product) => {
        if (product.title.toLowerCase().includes(value.toLowerCase())) {
          newProduct.push({ ...product });
        }
      });

      this.setState({ products: newProduct });
    } else {
      this.setState({ products: JSON.parse(JSON.stringify(productData)) });
    }
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <div></div>
        <Header
          currentUser={this.state.currentUser}
          handleProductSearch={this.handleProductSearch}
        />
        <Switch>
          <Route exact path="/">
            {this.state.currentUser ? (
              <Homepage products={this.state.products} />
            ) : (
              <Signin></Signin>
            )}
          </Route>
          <Route exact path="/product/:id" component={ProductView} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <Signin />
            }
          />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
