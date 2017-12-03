import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

class Hero extends Component {

  renderTitle() {
    const title = { __html: this.props.title };

    if (this.props.isQuote) {
      return (
        <div className="hero-body Hero-text">
          <h2 id="Page-quote" dangerouslySetInnerHTML={title}></h2>
        </div>
      );
    }

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
        backgroundImage: `url("${this.props.image}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };

      return (
        <section className="hero custom-height" style={backgroundImageStyle}>
          {this.renderTitle()}
        </section>
      );
    } else {
      return (
        <section className="hero is-small primary-bg">
          {this.renderTitle()}
        </section>
      );
    }
  }

}

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  isQuote: PropTypes.bool
};

Hero.defaultProps = {
  isQuote: false
}

export default Hero;
