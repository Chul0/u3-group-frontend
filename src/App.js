import './App.css';

import { Route, Redirect } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from './contexts/UserContext'

import NavBar from './components/NavBar'
import SignupLoginForm from './components/SignupLoginForm'

import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Login from './pages/Login'
import MyCart from './pages/MyCart'
import MyOrder from './pages/MyOrder'
import ProductDetail from './pages/ProductDetail'
import Signup from './pages/Signup'



function App() {
  const [user, setUser] = useContext(UserContext)

  return (
    <div className="App">
      <div className="NavBar-container">
        <NavBar />
      </div>

      <Route 
       path="/"
       exact
       render={()=>{
         return <Home />
       }}
      />

<Route 
       path="/signup"
       render={()=>{
        if(user.id){
          return <Redirect to ="/allproducts" />
        } else {
         return <Signup />
        }
       }}
      />

      <Route 
       path="/login"
       render={()=>{
         if(user.id){
          return <Redirect to ="/allproducts" />
         } else{
          return <Login />
         }
       }}
      />

      <Route 
       path="/allproducts"
       render={()=>{
         if(user.id){
          return <AllProducts />
         } else{
          return <Redirect to ="/" />
         }
       }}
      />

      <Route 
       path="/mycart"
       render={()=>{
         if(user.id){
          return <MyCart />
         } else{
          return <Redirect to ="/" />
         }
       }}
      />

      <Route 
       path="/myorder"
       render={()=>{
         if(user.id){
          return <MyOrder />
         } else{
          return <Redirect to ="/" />
         }
       }}
      />


    </div>
  );
}

export default App;
