import React, { Component } from 'react';
import Executives from './Executives';
import Hero from './Hero';
import Api from '../Api';
import './Executive.css';

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
    return(
      <div>
        <div className="Executive-container">
          <div className="Executive-box">
              <a href={`/president`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/president.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title"> President </h3>
                <h1 className="exec-title"> Isha Joshi </h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/secretary`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/secretary.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title"> Secretary </h3>
                <h1 className="exec-title">Anabelle Cooper </h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/deputy-secretary`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/secretary-deputy.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Deputy Secretary </h3>
                <h1 className="exec-title"> Georgia Cooke </h1>
              </div>
          </div>
        </div>
        <div className="Executive-container">
          <div className="Executive-box">
              <a href={`/treasurer`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/treasurer.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title"> Treasurer </h3>
                <h1 className="exec-title"> Thibaut Zeestraten </h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/partnerships-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/partnerships.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Partnerships Manager</h3>
                <h1 className="exec-title"> Lasanthi Weerasekara </h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/metro-schools-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/metro-schools.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Metro Schools Manager </h3>
                <h1 className="exec-title">Jared Carey</h1>
              </div>
          </div>
        </div>
        <div className="Executive-container">
          <div className="Executive-box">
              <a href={`/rural-schools-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/rural-schools.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title"> Rural Schools Manager </h3>
                <h1 className="exec-title"> Michael Day </h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/training-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/training.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Training Manager </h3>
                <h1 className="exec-title">Suzannah Cooper </h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/marketing-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/marketing.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Marketing Manager </h3>
                <h1 className="exec-title">Bianca Zhang</h1>
              </div>
          </div>
        </div>
        <div className="Executive-container">
          <div className="Executive-box">
              <a href={`/social-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/social.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title"> Social Manager </h3>
                <h1 className="exec-title"> Yiyan Xu (Janice)</h1>
              </div>
          </div>
              <div className="Executive-box">
                  <a href={`/deputy-social-manager`}>
                    <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/social-deputy.png"} />
                  </a>
                  <div className="Executive-text">
                    <h3 className="exec-title"> Deputy Social Manager </h3>
                    <h1 className="exec-title"> Gianluca Anzalone </h1>
                  </div>
              </div>
            <div className="Executive-box">
            </div>
        </div>
      </div>


    );
  }


  render() {
    return (
      <div>
        <Hero title={"Executive Team"} />
          {this.renderExecutives()}
      </div>
    );
  }
}

export default ExecutivesPage;
