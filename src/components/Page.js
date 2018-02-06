import React from 'react';
import BaseComponent from './BaseComponent';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Api from '../Api';
import Hero from './Hero';
import './Page.css';

class Page extends BaseComponent {
  constructor(props) {
    super(props); 

    // Allows us to get the content from the API
    this.api = new Api();

    this.hostname = process.env.REACT_APP_HOSTNAME || window.location.hostname;

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
      return this.props.title;
    }

    if (this.state.content) {
      if (this.state.content.title) {
        return this.state.content.title.rendered;
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
            this.updateState({featuredImage: url});
          });
      } else {
        this.updateState({featuredImage: null});
      }
    }
  }

  /**
   * Calls the API to update page data
   */
  getPageData(slug) {
    this.api.getPage(slug)
      .then((page) => {
        this.updateState({content: page});

        // Update the media URL
        this.getMediaUrl();
      });
  }

  componentDidMount() {
    super.componentDidMount();
    const slug = this.props.slug;
    this.getPageData(slug);
  }

  componentWillReceiveProps(newProps) {
    // Check for a slug update
    if (newProps.slug !== this.props.slug) {
      this.getPageData(newProps.slug);
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
    // Don't capture if it is linking to something stored in wp-content
    // Such as PDF files
    if (anchor && anchor.href && !anchor.href.includes("wp-content")) {
      if (this.hostname === anchor.hostname) {
        event.preventDefault();
        this.props.history.push(anchor.pathname);
      }
    }
  }

  render() {
    return (
      <div>
        <Hero title={this.getTitle()} image={this.state.featuredImage} isQuote={this.props.isQuote} />
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
  slug: PropTypes.string,
  isQuote: PropTypes.bool
};

Page.defaultProps = {
  isQuote: false
}

export default withRouter(Page);
