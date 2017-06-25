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
        <li className="Sidebar-link" key={link.title}>
          <Link to={`/${this.parseLink(link)}`} dangerouslySetInnerHTML={{__html: link.title}} />
        </li>
      );
    });

    return links;
  }

  render() {

    return (
      <div className="menu Sidebar-container">
        <p className="menu-label">
          Pages
        </p>
        <ul className="menu-list">
          {this.renderLinks()}
        </ul>
      </div>
    )
  }
}

export default Sidebar;
