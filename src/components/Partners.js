import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Partners.css';

class Partners extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null
    };

    const featuredImage = this.props.partner.featured_media;
    this.props.api.getMedia(featuredImage)
      .then((imageUrl) => {
        this.setState({imageUrl: imageUrl});
      });
  }

  getTitle() {
    return this.props.partner.title.rendered;
  }

  getBody() {
    return {
      __html: this.props.partner.content.rendered
    };
  }

  classNameType(title) {
    if (title === "ConocoPhillips") {
       return "Partner-box border-start";
    } else  if (title === "Caterpillar") {
      return "Partner-box border-gold";
    } else {
        return "Partner-box";
    }
  }

  getLinkToSite(title) {
    if (title === "ConocoPhillips") {
      return "https://www.conocophillips.com.au/";
    } else if (title === "Rio Tinto") {
      return "https://www.riotinto.com/";
    } else if (title === "National Transport Insurance") {
      return "https://www.nti.com.au/";
    } else if (title === "ERM Power") {
      return "https://ermpower.com.au/";
    } else if (title === "Polymathian") {
      return "https://polymathian.com/";
    } else if (title === "Deloitte") {
      return "https://www2.deloitte.com/au/en.html";
    } else  if (title === "Jade Engineering") {
      return "https://www.jadeeng.com.au/";
    } else if (title === "Caterpillar") {
      return "https://www.cat.com/en_AU.html";
    } else if (title === "Wood.") {
      return "https://www.woodplc.com/";
    } else if (title === "KPMG") {
      return "https://home.kpmg/au/en/home.html";
    } else if (title === "EY") {
      return "https://www.ey.com/en_au";
    } else if (title === "IMC Trading") {
      return "https://www.imc.edu.au/";
    } else if (title === "Amazon") {
      return "https://www.aboutamazon.com/";
    } else if (title === "Department of Defence") {
      return "https://www.defence.gov.au/";
    } else if (title === "Micromelon Robotics") {
      return "https://micromelon.com.au/";
    } else if (title === "Prosple") {
      return "https://prosple.com/about-us";
    } else if (title === "Teach For Australia") {
      return "https://teachforaustralia.org/";
    }
  }

  render() {
    const title = this.getTitle();

    return (
      <div  className={this.classNameType(title)}>
        <div className="Partner-image">
          <a target="_blank" href={this.getLinkToSite(title)}>
            <img alt="Logo" src={this.state.imageUrl} />
          </a>
        </div>
        <div className="Partner-text">
          <h1 className="title">{this.getTitle()}</h1>
          <div dangerouslySetInnerHTML={this.getBody()} />
        </div>
      </div>
    )
  }
}

Partners.propTypes = {
  partner: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired,
  ranking: PropTypes.object.isRequired
};

export default Partners;
