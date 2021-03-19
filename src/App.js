import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInSingUpForm from './pages/SignInSingUpForm/SignInSingUpForm'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSingUpForm} />
      </Switch>
    </div>
  );
}

export default App;
