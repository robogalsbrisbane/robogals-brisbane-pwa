import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import Api from './Api';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.api = new Api();

    this.state = {
      sidebarVisible: false,
      menuLinks: [],
      frontpageSlug: ''
    };

    // Get the menu links
    this.api.getMenuLinks()
      .then((links) => {
        this.setState({menuLinks: links});
      });

    // Get the frontpage slug
    this.api.getFrontpageSlug()
      .then((slug) => {
        this.setState({frontpageSlug: slug});
      });

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.renderFrontpage = this.renderFrontpage.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  toggleSidebar() {
    if (this.state.sidebarVisible) {
      this.setState({sidebarVisible: false});
    } else {
      this.setState({sidebarVisible: true});
    }
  }

  closeSidebar() {
    this.setState({sidebarVisible: false});
  }

  /**
   * Renders the sidebar
   */
  renderSidebar() {
    if (this.state.sidebarVisible) {
      return (
        <div className="App-sidebar">
          <Sidebar links={this.state.menuLinks} />
        </div>
      );
    }

    // Don't display the sidebar
    return null;
  }

  /**
   * Renders the frontpage of the application
   */
  renderFrontpage() {
    return <Page slug={this.state.frontpageSlug} />;
  }

  /**
   * Render a page
   * 
   * The props is a instance from the React Router
   */
  renderPage(props) {
    const slug = props.match.params.page_slug;

    return <Page slug={slug} />;
  }

  render() {

    return (
      <Router>
        <div className="fill-area">
          <Header toggleSidebar={this.toggleSidebar}/>

          <div className="App-content-container">
            
            <CSSTransitionGroup
            transitionName="App-slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              {this.renderSidebar()}
            </CSSTransitionGroup>

              <div className="content App-content" onClick={this.closeSidebar}>
                <Route exact strict path="/" render={this.renderFrontpage} />
                <Route path="/:page_slug" render={this.renderPage} />
              </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
