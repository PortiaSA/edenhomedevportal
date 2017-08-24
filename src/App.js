import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import TopNavigation from './components/TopNavigation';

import Home from './pages/Home';
import GettingStarted from './pages/tutorials/GettingStarted';
import ApiReference from './pages/Reference';
import Listings from './pages/docs/Listings';
import Search from './pages/docs/Search';
import Accounts from './pages/docs/Accounts';
import Billing from './pages/docs/Billing';
import Contents from './pages/docs/Contents';
import Currencies from './pages/docs/Currencies';
import Events from './pages/docs/Events';
import Feeds from './pages/docs/Feeds';
import Gis from './pages/docs/Gis';
import Identity from './pages/docs/Identity';
import Notifications from './pages/docs/Notifications';
import Publishers from './pages/docs/Publishers';
import Requests from './pages/docs/Requests';
import Statistics from './pages/docs/Statistics';
import Users from './pages/docs/Users';

const App = () => (
  <Router>
    <div>
      <TopNavigation />
      <Route exact path="/" component={Home}/>
      <Route exact path="/docs/reference" component={ApiReference}/>
      <Route exact path="/tutorials/getting-started" component={GettingStarted}/>
      <Route path="/docs/listings" component={Listings}/>
      <Route path="/docs/search" component={Search}/>
      <Route path="/docs/accounts" component={Accounts}/>
      <Route path="/docs/billing" component={Billing}/>
      <Route path="/docs/contents" component={Contents}/>
      <Route path="/docs/currencies" component={Currencies}/>
      <Route path="/docs/events" component={Events}/>
      <Route path="/docs/feeds" component={Feeds}/>
      <Route path="/docs/gis" component={Gis}/>
      <Route path="/docs/identity" component={Identity}/>
      <Route path="/docs/notifications" component={Notifications}/>
      <Route path="/docs/publishers" component={Publishers}/>
      <Route path="/docs/requests" component={Requests}/>
      <Route path="/docs/statistics" component={Statistics}/>
      <Route path="/docs/users" component={Users}/>
    </div>
  </Router>
)
export default App
