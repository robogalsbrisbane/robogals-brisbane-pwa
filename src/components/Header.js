import React, { Component } from 'react';
import { Icon } from 'react-fa';
import './Header.css';

class Header extends Component {
  render() {

    // Define the style here, so it overrides Bulma's style
    const headerStyle = {
      color: 'white',
      fontSize: '2em'
    };

    return (
      <div>
        <nav className="nav has-shadow primary-bg">
          <div className="nav-left">

            <a className="nav-item" onClick={this.props.toggleSidebar}>
              <Icon style={headerStyle} name="bars" />
            </a>

            <a className="nav-item" style={headerStyle}>Robogals<b>UQ</b></a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
