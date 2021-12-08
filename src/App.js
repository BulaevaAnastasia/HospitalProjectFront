import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RegistrationUser from './pages/RegistrationUser';
import AuthorizationUser from './pages/AuthorizationUser';
import AppointmentPage from './pages/AppointmentPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/registration" component={RegistrationUser} />
        <Route path="/autorization" component={AuthorizationUser} />
        <Route path="/appointments" component={AppointmentPage}/>
        <Redirect path="/" to="/autorization" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
