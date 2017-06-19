import React, { Component } from 'react';
import './Sponsor.css';

class Sponsor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null
    };

    const featuredImage = this.props.sponsor.featured_media;
    this.props.api.getMedia(featuredImage)
      .then((imageUrl) => {
        this.setState({imageUrl: imageUrl});
      });
  }

  getTitle() {
    return this.props.sponsor.title.rendered;
  }

  getImage() {

  }

  getBody() {
    return {
      __html: this.props.sponsor.content.rendered
    };
  }

  render() {

    return (
      <div className="Sponsor-box">

        <div className="Sponsor-image">
          <img alt="Logo" src={this.state.imageUrl} />
        </div>

        <div className="Sponsor-text">
          <h1 className="title">{this.getTitle()}</h1>
          <div dangerouslySetInnerHTML={this.getBody()} />
        </div>
      </div>
    )
  }
}

export default Sponsor;
