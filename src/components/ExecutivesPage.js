import React, { Component } from 'react';
import Executive from './Executive';
import Api from '../Api';

class ExecutivesPage extends Component {
  constructor(props) {
    super(props); 

    // Allows us to get the content from the API
    this.api = new Api();

    this.state = {
      executives: []
    };

    this.api.getExecutives()
      .then((executives) => {
        this.setState({executives: executives});
      });
  }

  renderExecutives() {
    const executives = this.state.executives.map((executive) => {
      return <Executive key={executive.id} api={this.api} executive={executive} />
    });

    return executives;
  }

  render() {
    return (
      <div>
        {this.renderExecutives()}
      </div>
    );
  }
}

export default ExecutivesPage;
