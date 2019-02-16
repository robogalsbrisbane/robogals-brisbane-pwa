import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Partner.css';

class Partner extends Component {

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

  render() {

    return (
      <div className="Partner-box">

        <div className="Partner-image">
          <img alt="Logo" src={this.state.imageUrl} />
        </div>

        <div className="Partner-text">
          <h1 className="title">{this.getTitle()}</h1>
          <div dangerouslySetInnerHTML={this.getBody()} />
        </div>
      </div>
    )
  }
}

Partner.propTypes = {
  partner: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired
};

export default Partner;
