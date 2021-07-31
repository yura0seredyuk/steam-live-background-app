import React from 'react';
import Customers from './components/Customers/Customers';
import Users from './components/Users/Users';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from '@/ui/client/pages/MainPage/MainPage';
import './Client.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <section className='client__section'>
      <Header/>
      <Router>
        <Switch>
          <Route path="/customers"><Customers/></Route>
          <Route path="/users"><Users/></Route>
          <Route exact path='/'><MainPage/></Route>
          <Route>{() => <h1>404 page</h1>}</Route>
        </Switch>
      </Router>
      <Footer/>
    </section>
  );
}

export default App;
