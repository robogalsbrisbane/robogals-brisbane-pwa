import React, { Component } from 'react';
import Api from '../Api';
import './Page.css';

class Page extends Component {
  constructor(props) {
    super(props); 

    // Allows us to get the content from the API
    this.api = new Api();

    this.state = {
      content: {},
      featuredImage: null
    };

  }

  getTitle() {
    if (this.state.content) {
      if (this.state.content.title) {
        return this.state.content.title.rendered;
      }
    }

    return null;
  }

  getBody() {
    if (this.state.content) {
      if (this.state.content.content) {
        return {
          __html: this.state.content.content.rendered
        };
      }
    }

    return null;
  }

  getMediaUrl() {
    if (this.state.content) {
      const featuredMedia = this.state.content.featured_media;

      if (featuredMedia !== null && featuredMedia !== 0) {
        this.api.getMedia(featuredMedia)
          .then((url) => {
            this.setState({featuredImage: url});
          });
      } else {
        this.setState({featuredImage: null});
      }
    }
  }

  /**
   * Calls the API to update page data
   */
  getPageData(slug) {
    this.api.getPage(slug)
      .then((page) => {
        this.setState({content: page});

        // Update the media URL
        this.getMediaUrl();
      });
  }

  componentDidMount() {
    const slug = this.props.slug;
    this.getPageData(slug);
  }

  componentWillReceiveProps(newProps) {
    // Check for a slug update
    if (newProps.slug !== this.props.slug) {
      this.getPageData(newProps.slug);
    }
  }

  renderHero() {
    const title = this.getTitle();


    if (this.state.featuredImage) {
      const backgroundImageStyle = {
        backgroundImage: `url("${this.state.featuredImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };

      return (
        <section className="hero is-large" style={backgroundImageStyle}>
          <div className="hero-body Page-hero">
            <h1 id="Page-title">{title}</h1>
          </div>
        </section>
      );
    } else {
        return (
          <section className="hero is-small primary-bg">
            <div className="hero-body Page-hero">
              <h1 id="Page-title">{title}</h1>
            </div>
          </section>
        );
    }
  }

  render() {
    return (
      <div>
        {this.renderHero()}
        <div className="Page-content" dangerouslySetInnerHTML={this.getBody()} />
      </div>
    );
  }
}

export default Page;
