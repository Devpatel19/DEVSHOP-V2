import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import {Container} from 'react-bootstrap';
import Header from './component/Header'
import Footer from './component/Footer'
import Homescreen from './screen/Homescreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import ProfileScreen from './screen/ProfileScreen'
import ShippingScreen from './screen/ShippingScreen'
import  PaymentScreen from './screen/PaymentScreen'
import  PlaceOrderScreen from './screen/PlaceOrderScreen'
import  OrderScreen from './screen/OrderScreen'
import  UserListScreen from './screen/UserListScreen'
import  UserEditScreen from './screen/UserEditScreen'
import  ProductListScreen from './screen/ProductListScreen'
import  ProductEditScreen from './screen/ProductEditScreen'
import  OrderListScreen from './screen/OrderListScreen'


const  App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      
      <Container>
      <Route path='/order/:id' component={OrderScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/register' component={RegisterScreen} /> 
      <Route path='/search/:keyword' component={Homescreen} exact />
      <Route path='/page/:pageNumber' component={Homescreen} exact />
      <Route path='/search/:keyword/page/:pageNumber' component={Homescreen} exact />
      <Route path='/' component={Homescreen} exact />
      
      <Route path='/product/:id' component={ProductScreen}  />
      <Route path='/admin/userlist' component={UserListScreen}  />
      <Route path='/admin/productlist' component={ProductListScreen} exact />
      <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact  />
      <Route path='/admin/orderlist' component={OrderListScreen}  />
      <Route path='/cart/:id?' component={CartScreen}  />
      <Route path='/admin/user/:id/edit' component={UserEditScreen}  />
      <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
      </Container>
       
    </main>
    <Footer />
    </Router>
      );
}

export default App;
