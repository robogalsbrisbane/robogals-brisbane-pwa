import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menubar from './Menubar';
import './Header.css';

class Header extends Component {
  /**
   * Renders the menubar
   */
  renderMenubar() {
    return (
        <Menubar links={this.props.links} />
    );
  }

  render() {

    return (
      <div>
        <navbar className="header primary-bg">
          <Link className="logo" to="/">
            <img style={{height: "2rem"}} src={process.env.PUBLIC_URL + "/global-just-text.png"} alt="Robogals Logo" />
          </Link>

          {this.renderMenubar()}

        </navbar>
      </div>
    )
  }
}

export default Header;
