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
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/president.jpg"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">President</h3>
                <h1 className="exec-title">Smriti Bangera</h1>
              </div>
          </div>
        </div>
        <div className="Executive-container">
          <div className="Executive-box">
              <a href={`/secretary`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/secretary.jpg"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Secretary</h3>
                <h1 className="exec-title">Justine Bennet</h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/partnerships-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/partnerships.png"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Partnerships Manager</h3>
                <h1 className="exec-title">Jacob Henderson</h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/treasurer`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/treasurer.jpg"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Treasurer</h3>
                <h1 className="exec-title">Helena Payne</h1>
              </div>
          </div>
        </div>
        <div className="Executive-container">
          <div className="Executive-box">
              <a href={`/metro-schools-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/schools.jpg"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Schools Manager</h3>
                <h1 className="exec-title">Jared Carey</h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/marketing-manager`}>
                <img className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/marketing.jpg"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Marketing Manager</h3>
                <h1 className="exec-title">Kimberley Randall</h1>
              </div>
          </div>
          <div className="Executive-box">
              <a href={`/training-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/training.jpg"} />
              </a>
              <div className="Executive-text">
                <h3 className="exec-title">Training Manager</h3>
                <h1 className="exec-title">Reagan Marshall</h1>
              </div>
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
