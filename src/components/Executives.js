import React from 'react';
import BaseComponent from './BaseComponent';
import PropTypes from 'prop-types';
import './Executive.css';

class Executive extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null
    };

    const featuredImage = this.props.executive.featured_media;
    this.props.api.getMedia(featuredImage)
      .then((imageUrl) => {
        this.updateState({imageUrl: imageUrl});
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

  getExecUrl() {
    const text = this.props.executive.title.rendered;
    return text.replace(/\s+/g, '-').toLowerCase();
  }


  render() {
    return (
      <div className="Executive-box">
          <a href={`/${this.getExecUrl()}`}>
            <img  className="Executive-image" alt="Logo" src={this.state.imageUrl} />
          </a>
          <div className="Executive-text">
            <h1 className="exec-title" dangerouslySetInnerHTML={this.getTitle()} />
            <h3 className="exec-title" dangerouslySetInnerHTML={this.getBody()} />
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
