import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
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

    this.captureLinks = this.captureLinks.bind(this);
  }

  /**
   * Returns the title of the document
   */
  getTitle() {

    // If we have a custom title, display it
    if (this.props.title) {
      return {
        __html: this.props.title
      };
    }

    if (this.state.content) {
      if (this.state.content.title) {
        return {
          __html: this.state.content.title.rendered
        }
      }
    }

    return null;
  }

  /**
   * Returns the body of the document
   */
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
      // Move this to css
      const backgroundImageStyle = {
        backgroundImage: `linear-gradient(
            135deg,
            rgba(54, 100, 139, 0.45),
            rgba(3, 49, 88, 0.6)
          ), 
          url("${this.state.featuredImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };

      return (
        <section className="hero is-large" style={backgroundImageStyle}>
          <div className="hero-body Page-hero">
            <h1 id="Page-title" dangerouslySetInnerHTML={title}></h1>
          </div>
        </section>
      );
    } else {
        return (
          <section className="hero is-small primary-bg-darker">
            <div className="hero-body Page-hero">
              <h1 id="Page-title" dangerouslySetInnerHTML={title}></h1>
            </div>
          </section>
        );
    }
  }

  findAnchor(node) {
    while (node.nodeName.toLowerCase() !== 'a') {
      if (!node.parentNode) {
        return false;
      }
      node = node.parentNode;
    }
    return node;
  }

  captureLinks(event) {
    const anchor = this.findAnchor(event.target);
    console.log(anchor);
    if (anchor && anchor.href) {

      if (window.location.hostname === anchor.hostname) {
        event.preventDefault();
        this.props.history.push(anchor.pathname);
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderHero()}
        <div 
          className="Page-content content"
          onClick={this.captureLinks}
          dangerouslySetInnerHTML={this.getBody()} 
        />
      </div>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
};

export default withRouter(Page);
