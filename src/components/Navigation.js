import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Page from './Page';
import SponsorsPage from './SponsorsPage';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.renderFrontpage = this.renderFrontpage.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  /**
   * Renders the frontpage of the application
   */
  renderFrontpage() {
    const title = '<b>Inspire</b>, <b>engage</b> and <b>empower</b> young women into engineering related fields';

    return <Page title={title} slug={this.props.frontpageSlug} />;
  }

  /**
   * Render a page
   * 
   * The props is a instance from the React Router
   */
  renderPage(props) {
    const slug = props.match.params.page_slug;

    switch (slug) {
      case 'sponsors':
        return <SponsorsPage />;
      default:
        return <Page slug={slug} />;
    }
  }

  render() {
    return (
      <div>
        <Route exact strict path="/" render={this.renderFrontpage} />
        <Route path="/:page_slug" render={this.renderPage} />
      </div>
    );
  }
}

export default Navigation;
