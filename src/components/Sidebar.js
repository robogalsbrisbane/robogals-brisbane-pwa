import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

  parseLink(link) {
    if (link.object === 'page') {
      return link.object_slug;
    }
    return link.object;
  }

  renderLinks() {
    const links = this.props.links.map((link) => {
      return (
        <li className="Sidebar-link" key={link.object_slug}>
          <Link to={`/${this.parseLink(link)}`}>{link.title}</Link>
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
