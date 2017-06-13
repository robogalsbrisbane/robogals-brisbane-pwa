import React, { Component } from 'react';
import Sponsor from './Sponsor';
import Api from '../Api';

class SponsorsPage extends Component {
  constructor(props) {
    super(props); 

    // Allows us to get the content from the API
    this.api = new Api();

    this.state = {
      sponsors: []
    };

    this.api.getSponsors()
      .then((sponsors) => {
        this.setState({sponsors: sponsors});
      });
  }

  renderSponsors() {
    const sponsors = this.state.sponsors.map((sponsor) => {
      return <Sponsor key={sponsor.id} sponsor={sponsor} />
    });

    return sponsors;
  }

  render() {
    return (
      <div>
        {this.renderSponsors()}
      </div>
    );
  }
}

export default SponsorsPage;
