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
      <div className="Executive-team">

        <div className="Executive-box">
            <a href={`/president`}>
              <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/president.png"} />
            </a>
            {/* <div className="Executive-text">
              <h3 className="exec-title">President</h3>
              <h1 className="exec-title">Smriti Bangera</h1>
            </div> */}
        </div>

        <div className="Executive-box">
              <a href={`/secretary`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/secretary.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Secretary</h3>
                <h1 className="exec-title">Justine Bennet</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/partnerships-manager-01`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/partnerships-01.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Partnerships Manager</h3>
                <h1 className="exec-title">Jade Brosnan</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/partnerships-manager-02`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/partnerships-02.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Partnerships Manager</h3>
                <h1 className="exec-title">Chiran Walisundara</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/treasurer-qut`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/treasurer-qut.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Treasurer (QUT)</h3>
                <h1 className="exec-title">Akashdeep Kaur</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/treasurer-uq`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/treasurer-uq.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Treasurer (UQ)</h3>
                <h1 className="exec-title">Amriti Mohith</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/schools-manager-01`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/schools-01.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Schools Manager</h3>
                <h1 className="exec-title">Annabelle Nott</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/schools-manager-02`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/schools-02.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Schools Manager</h3>
                <h1 className="exec-title">Jamieson Ritchie</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/deputy-schools-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/schools-deputy.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Deputy Schools Manager</h3>
                <h1 className="exec-title">Gwyneth de Guia</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/marketing-manager-01`}>
                <img className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/marketing-01.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Marketing Manager</h3>
                <h1 className="exec-title">Luna Dang</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/marketing-manager-02`}>
                <img className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/marketing-02.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Marketing Manager</h3>
                <h1 className="exec-title">Nadine Gamage</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/deputy-marketing-manager`}>
                <img className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/marketing-deputy.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Deputy Marketing Manager</h3>
                <h1 className="exec-title">James Kizman</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/training-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/training.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Training Manager</h3>
                <h1 className="exec-title">Luc Nederhof</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/deputy-training-manager`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/training-deputy.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Deputy Training Manager</h3>
                <h1 className="exec-title">Taylor Willmington</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/chief-returning-officer`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/returning.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Chief Returning Officer</h3>
                <h1 className="exec-title">Wilson Kong</h1>
              </div> */}
          </div>

          <div className="Executive-box">
              <a href={`/webmaster`}>
                <img  className="Executive-image" alt="Logo" src={process.env.PUBLIC_URL + "/exec/webmaster.png"} />
              </a>
              {/* <div className="Executive-text">
                <h3 className="exec-title">Webmaster/Chief Returning Officer</h3>
                <h1 className="exec-title">Jared Carey</h1>
              </div> */}
          </div>

      </div>
    );
  }


  render() {
    return (
      <div>
        <Hero title={"Executive Team"} />
        <h3 className="click-execs-text">Learn more about our Executives by clicking on their images!</h3>
        {this.renderExecutives()}
      </div>
    );
  }
}

export default ExecutivesPage;
