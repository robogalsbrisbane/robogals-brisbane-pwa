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

  /**
   * Renders all links from the props.links object
   */
  renderAllLinks() {
    return this.renderLinks(this.props.links, 0);  
  }

  /**
   * Renders a list of links
   * Will recurse through children object
   *
   * @param {object} links A json object of links
   * @param {integer} depth The depth of the current links
   */
  renderLinks(links, depth) {
    const linkObjects = links.map((link) => {
      
      let childLinks = null;

      if (link.children) {
        childLinks = this.renderLinks(link.children, depth + 1);
      }

      const style = {'paddingLeft': (10 * depth) + 'px'};

      return (
        <li className="Sidebar-link" key={link.title}>
          <Link to={`/${this.parseLink(link)}`} style={style} dangerouslySetInnerHTML={{__html: link.title}} />
          {childLinks}
        </li>
      );
    });

    return linkObjects;
  }

  render() {

    return (
      <div className="menu Sidebar-container">
        <p className="menu-label">
          Pages
        </p>
        <ul className="menu-list">
          {this.renderAllLinks()}
        </ul>
      </div>
    )
  }
}

export default Sidebar;
