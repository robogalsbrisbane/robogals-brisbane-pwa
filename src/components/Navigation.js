import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Page from './Page';
import PartnersPage from './PartnersPage';
import ExecutivesPage from './ExecutivesPage';
import WorkshopMap from './WorkshopMap';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.renderFrontpage = this.renderFrontpage.bind(this);
    this.renderPage = this.renderPage.bind(this);

    ReactGA.initialize('UA-79288806-4', {
      debug: true
    });
  }

  /**
   * Logs all routes to Google Analytics
   */
  logPageView() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  /**
   * Renders the frontpage of the application
   */
  renderFrontpage() {
    this.logPageView();
    const title = '<b>Inspire</b>, <b>engage</b> and <b>empower</b> young women into engineering related fields';

    return <Page title={title} slug={this.props.frontpageSlug} />;
  }

  /**
   * Render a page
   * 
   * The props is a instance from the React Router
   */
  renderPage(props) {
    this.logPageView();
    const slug = props.match.params.page_slug;

    switch (slug) {
      case 'sponsors':
        return <PartnersPage />;
      case 'executives':
        return <ExecutivesPage />;
      case 'locations':
        return <WorkshopMap />;
      default:
        return <Page slug={slug} />;
    }
  }

  render() {
    return (
      <div>
        <Route exact strict path="/" render={this.renderFrontpage}/>
        <Route path="/:page_slug" render={this.renderPage} />
      </div>
    );
  }
}

export default Navigation;
