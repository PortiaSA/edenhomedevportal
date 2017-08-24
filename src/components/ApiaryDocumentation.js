import React, { Component } from 'react';

const Embed = window.Apiary.Embed;

class EmbedDocumentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {subdomain: props.subdomain};
  }

  componentDidMount() {
    const documentation = new Embed({
      "subdomain": this.state.subdomain,
      "element": "#documentation",
      "theme": {
        tableOfContents: { // To change color of a title in Machine Column
          section: {
            title: {
              color: '#EB207D'
            }
          }
        },
        humanColumn: {
          content: {
            section: {
              title: {
                color: '#EB207D'
              }
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <div id="documentation"></div>
    );
  }
}

export default EmbedDocumentation
