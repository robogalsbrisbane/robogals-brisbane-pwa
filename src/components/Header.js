import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {

    return (
      <div>
        <navbar className="navbar primary-bg flexbox">
          <a className="Header-burger" onClick={this.props.toggleSidebar}>
            <Icon name="bars" />
          </a>

          <Link className="flexbox" to="/">
            <img style={{height: "2rem"}} src={process.env.PUBLIC_URL + "/global-just-text.png"} alt="Robogals Logo" />
          </Link>
        </navbar>
      </div>
    )
  }
}

Header.propTypes = {
  toggleSidebar: PropTypes.func
};

export default Header;
