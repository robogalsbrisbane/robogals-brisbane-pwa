import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

class Hero extends Component {

  renderTitle() {
    const title = { __html: this.props.title };

    return (
      <div className="hero-body Hero-text">
        <h1 id="Page-title" dangerouslySetInnerHTML={title}></h1>
      </div>
    );
  }

  render() {
    if (this.props.image) {
      // Move this to css
      const backgroundImageStyle = {
        backgroundImage: `linear-gradient(
            135deg,
            rgba(54, 100, 139, 0.45),
            rgba(3, 49, 88, 0.6)
          ), 
          url("${this.props.image}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };

      return (
        <section className="hero is-large" style={backgroundImageStyle}>
          {this.renderTitle()}
        </section>
      );
    } else {
      return (
        <section className="hero is-small primary-bg-darker">
          {this.renderTitle()}
        </section>
      );
    }
  }

}

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default Hero;
