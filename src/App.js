import './App.css';
import Nav from './component/nav';
import Home from './component/home';
import {Switch, Route } from "react-router-dom"
import Products from './component/products';
import Product from './component/product';
import Cart from './component/cart';
import Login from "./component/login";
import Register from "./component/register";
function App() {
  return (
    <>
<Nav />
<Switch>
<Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
  <Route exact path="/" component={Home} />
  <Route exact path="/products" component={Products} />
  <Route exact path="/products/:id" component={Product} />
  <Route exact path="/cart" component={Cart} />


</Switch>
</>
  );
}


export default App;
