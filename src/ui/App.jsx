import React, { useState } from 'react';
import './App.scss';
import Client from './client/Client';
import Admin from './admin/pages/Admin/Admin.jsx';
import AuthAdmin from './admin/pages/AuthAdmin/AuthAdmin.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin">{auth ? <AuthAdmin/> : <Admin setAuth={setAuth}/>}</Route>
          <Route path="/"><Client/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
