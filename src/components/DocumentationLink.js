import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

class DocumentationLink extends React.Component {
  constructor(props) {
    super(props);

    const title = (
      <h3>{props.apiName}</h3>
    )

    this.state = {
      title: title,
      description: props.apiDescription,
      href: "/docs/" + props.apiPage
    };
  }

  render() {
    return (
      <div className="col-md-6">
        <Panel header={this.state.title}>
          <p>{this.state.description}</p>
          <Link to={this.state.href}>View documentation</Link>
        </Panel>
      </div>
    );
  }
}

export default DocumentationLink
