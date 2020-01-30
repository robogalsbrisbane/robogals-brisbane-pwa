import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
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

  }




  render() {
    return (
      <Router basename={this.basename}>
        <div className="fill-area">
          <Header links={this.state.menuLinks}/>

            <Navigation frontpageSlug={this.state.frontpageSlug} links={this.state.menuLinks} />


          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
