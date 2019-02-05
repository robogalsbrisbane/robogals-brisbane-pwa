import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  NavLink
} from 'react-router-dom';
import './Menubar.css';

class Menubar extends Component {

  parseLink(link) {
    if (link.object === 'page') {
      return link.object_slug;
    }
    return link.object;
  }
  renderSubLinks(link) {
    if(!link) {
      return;
    }

      const subHeadings = link.map((subLink) => {
        return (
          <li>
            <NavLink
              className = "main"
              to={`/${this.parseLink(subLink)}`}
              dangerouslySetInnerHTML={{__html: subLink.title}}
            />
          </li>
        );
      });
      return subHeadings;


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
   */
  renderLinks(links) {

    if (links == null) {
      return (
        <p>Server offline</p>
      );
    }

    const linkObjects = links.map((link) => {

      return (
        <ul className="tab">
          <li className="title-menu">
             <a href={`/${this.parseLink(link)}`} className="main" >
               {link.title}
             </a>
           </li>
           <li className="menudrop">
              <ul className="sub">
                {this.renderSubLinks(link.children)}
              </ul>
           </li>
         </ul>


      );
    });

    return linkObjects;
  }

  render() {
    return (
        <ul className="menutab">
          {this.renderAllLinks()}
       </ul>
    )
  }

}

export default Menubar;
