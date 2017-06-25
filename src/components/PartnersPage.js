import React, { Component } from 'react';
import Partner from './Partner';
import Api from '../Api';

class PartnersPage extends Component {
  constructor(props) {
    super(props); 

    // Allows us to get the content from the API
    this.api = new Api();

    this.state = {
      partners: []
    };

    this.api.getPartners()
      .then((partners) => {
        this.setState({partners: partners});
      });
  }

  renderPartners() {
    const partners = this.state.partners.map((partner) => {
      return <Partner key={partner.id} api={this.api} partner={partner} />
    });

    return partners;
  }

  render() {
    return (
      <div>
        {this.renderPartners()}
      </div>
    );
  }
}

export default PartnersPage;
