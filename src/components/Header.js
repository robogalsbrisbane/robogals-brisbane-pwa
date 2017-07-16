import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {

    // Define the style here, so it overrides Bulma's style
    const headerStyle = {
      color: 'white',
      fontSize: '2em',
      margin: 'auto'
    };

    return (
      <div>
        <nav className="navbar primary-bg">
          <div className="navbar-start">
            <a className="Header-burger" onClick={this.props.toggleSidebar}>
              <Icon name="bars" />
            </a>

            <Link to="/" style={headerStyle}>Robogals<b>UQ</b></Link>
          </div>
        </nav>
      </div>
    )
  }
}

Header.propTypes = {
  toggleSidebar: PropTypes.func
};

export default Header;
