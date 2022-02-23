import React, { Component } from 'react';
import Partners from './Partners';
import Hero from './Hero';
import Api from '../Api';
import './Partners.css';

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
      return <Partners key={partner.id} api={this.api} partner={partner} />
    });

    return partners;
  }

  render() {
    return (
      <div>
        <Hero title={"Our Partners"} />
        <p className="text-style">
        Robogals would not be able to bring our message to students without the support of our partners.
        Their help allows us to run workshops, hold hackathons, organise rural trips, run industry networking events,
        and support our volunteers.</p>

        <p className="text-style">
        If you are interested in helping Robogals Brisbane inspire the next generation of engineers,
        please email our Partnerships Managers at <a href="mailto:brisbane.partnerships@robogals.org">brisbane.partnerships@robogals.org</a>.</p>

        {this.renderPartners()}

        <div className="text-style content">
          <h3> Our Coporate Supporters </h3>
          <li> <a target="_blank" href="https://robogals.org/">
            Robogals Global
          </a></li>
          <li> <a target="_blank" href="https://robogals.org/locations/asia-pacific-apac/">
            Robogals Asia-Pacific
          </a></li>
          <li> <a target="_blank" href="https://www.itee.uq.edu.au/">
            University of Queensland – School of Information Technology and Electrical Engineering
          </a></li>
        </div>

      </div>
    );
  }
}

export default PartnersPage;
