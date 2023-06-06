import React from 'react'
import Home from './pages/Home'
import Login from './pages/login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import SingleProduct from './pages/SingleProduct'
import ScrollToTop from './components/ScrollTop'
import Success from './pages/Success'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Cart from './pages/Cart'
import { useSelector } from 'react-redux'
import newProduct from './pages/NewProduct'

require('dotenv').config();

const App = () => {
  const user = useSelector(state => state.user.currentUser);

  console.log(user);


  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" >
          <Home user = {user} />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/success" component={Success} />
        <Route path="/products/:category" component={ProductList} />
        <Route exact path="/product/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        { user && user.isAdmin && <Route exact path="/newproduct" component={newProduct} />}  
      </Switch>
    </Router >
  )
}

export default App
