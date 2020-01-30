import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  NavLink
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

    if (links == null) {
      return (
        <p>Server offline</p>
      );
    }

    const linkObjects = links.map((link) => {
      let childLinks = null;

      if (link.children) {
        childLinks = this.renderLinks(link.children, depth + 1);
      }

      const style = {'paddingLeft': (10 * depth) + 'px'};

      return (
        <div key={link.title}>
          <li className="Sidebar-link">
            <NavLink
              activeClassName="Sidebar-link-active"
              onClick={this.props.closeSidebar}
              to={`/${this.parseLink(link)}`}
              style={style}
              dangerouslySetInnerHTML={{__html: link.title}}
            />
          </li>
          <ul>
            {childLinks}
          </ul>
        </div>
      );
    });

    return linkObjects;
  }

  render() {

    return (
      <div className="Sidebar-container"> <p className="menu-label"> Pages </p>
        <ul>
          {this.renderAllLinks()}
        </ul>
      </div>
    )
  }
}

Sidebar.propTypes = {
  closeSidebar: PropTypes.func
};

export default Sidebar;
