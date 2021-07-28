import './Client.scss';
import Customers from './components/Customers/Customers';
import Users from './components/Users/Users';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route path="/customers"><Customers/></Route>
          <Route path="/users"><Users/></Route>
          <Route exact path='/'>{() => <h1>Main page</h1>}</Route>
          <Route>{() => <h1>404 page</h1>}</Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
