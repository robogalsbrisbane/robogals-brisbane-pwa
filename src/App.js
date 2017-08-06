import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Api from './Api';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // The basename for react router
    this.basename = process.env.REACT_APP_BASENAME;

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
  }

  toggleSidebar() {
    if (this.state.sidebarVisible) {
      this.setState({sidebarVisible: false});
    } else {
      this.setState({sidebarVisible: true});
    }
  }

  closeSidebar() {
    if (this.state.sidebarVisible) {
      this.setState({sidebarVisible: false});
    }
  }

  /**
   * Renders the sidebar
   */
  renderSidebar() {
    const style = {};
    if (this.state.sidebarVisible) {
      style.transform = 'translate(0%)';
    } else {
      style.transform = 'translate(-105%)';
    }

    return (
      <div style={style} className="App-sidebar">
        <Sidebar closeSidebar={this.closeSidebar} links={this.state.menuLinks} />
      </div>
    );
  }

  render() {
    return (
      <Router basename={this.basename}>
        <div className="fill-area">
          <Header toggleSidebar={this.toggleSidebar}/>

          {this.renderSidebar()}

          <div onClick={this.closeSidebar}>
            <Navigation frontpageSlug={this.state.frontpageSlug} />
          </div>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
