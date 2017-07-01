import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Executive.css';

class Executive extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null
    };

    const featuredImage = this.props.executive.featured_media;
    this.props.api.getMedia(featuredImage)
      .then((imageUrl) => {
        this.setState({imageUrl: imageUrl});
      });
  }

  getTitle() {
    return {
      __html: this.props.executive.title.rendered
    };
  }

  getBody() {
    return {
      __html: this.props.executive.content.rendered
    };
  }

  render() {

    return (
      <div className="Executive-box">

        <div className="Executive-image">
          <img alt="Logo" src={this.state.imageUrl} />
        </div>

        <div className="Executive-text">
          <h1 className="title" dangerouslySetInnerHTML={this.getTitle()} />
          <div dangerouslySetInnerHTML={this.getBody()} />
        </div>
      </div>
    )
  }
}

Executive.propTypes = {
  executive: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired
};

export default Executive;
