import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ReferenceNavigation.css';

const navigation = () => (
  <div className="container-fluid second-navigation">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="action-button-right pull-right">
            <Link className="btn btn-primary" to="/tutorials/getting-started" role="button">Getting started</Link>
          </div>
          <h1><Link to="/docs/reference">API reference</Link></h1>
        </div>
      </div>
    </div>
  </div>
);

export default navigation;
