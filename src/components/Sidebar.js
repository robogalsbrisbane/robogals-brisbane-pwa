import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

  renderLinks() {
    const links = this.props.links.map((link) => {
      return (
        <li key={link.object_slug}>
          <Link to={`/${link.object_slug}`}>{link.title}</Link>
        </li>
      );
    });

    return links;
  }

  render() {

    return (
      <div className="menu Sidebar-container">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          {this.renderLinks()}
        </ul>
      </div>
    )
  }
}

export default Sidebar;
