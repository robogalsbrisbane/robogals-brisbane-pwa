import React from 'react';
import BaseComponent from './BaseComponent';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Api from '../Api';
import Hero from './Hero';
import './Page.css';

class Page extends BaseComponent {
  constructor(props) {
    super(props);

    // Allows us to get the content from the API
    this.api = new Api();

    this.hostname = process.env.REACT_APP_HOSTNAME || window.location.hostname;

    this.state = {
      content: {},
      featuredImage: null
    };

    this.captureLinks = this.captureLinks.bind(this);
  }

  /**
   * Returns the title of the document
   */
  getTitle() {

    // If we have a custom title, display it
    if (this.props.title) {
      return this.props.title;
    }

    if (this.state.content) {
      if (this.state.content.title) {
        return this.state.content.title.rendered;
      }
    }

    return null;
  }

  /**
   * Returns the body of the document
   */
  getBody() {
    if (this.state.content) {
      if (this.state.content.content) {
        return {
          __html: this.state.content.content.rendered
        };
      }
    }

    return null;
  }

  getMediaUrl() {
    if (this.state.content) {
      const featuredMedia = this.state.content.featured_media;

      if (featuredMedia !== null && featuredMedia !== 0) {
        this.api.getMedia(featuredMedia)
          .then((url) => {
            this.updateState({featuredImage: url});
          });
      } else {
        this.updateState({featuredImage: null});
      }
    }
  }

  /**
   * Calls the API to update page data
   */
  getPageData(slug) {
    this.api.getPage(slug)
      .then((page) => {
        this.updateState({content: page});

        // Update the media URL
        this.getMediaUrl();
      });
  }

  componentDidMount() {
    super.componentDidMount();
    const slug = this.props.slug;
    this.getPageData(slug);
  }

  componentWillReceiveProps(newProps) {
    // Check for a slug update
    if (newProps.slug !== this.props.slug) {
      this.getPageData(newProps.slug);
    }
  }

  findAnchor(node) {
    while (node.nodeName.toLowerCase() !== 'a') {
      if (!node.parentNode) {
        return false;
      }
      node = node.parentNode;
    }
    return node;
  }

  captureLinks(event) {
    const anchor = this.findAnchor(event.target);
    // Don't capture if it is linking to something stored in wp-content
    // Such as PDF files
    if (anchor && anchor.href && !anchor.href.includes("wp-content")) {
      if (this.hostname === anchor.hostname) {
        event.preventDefault();
        this.props.history.push(anchor.pathname);
      }
    }
  }

  renderImages(frontPage) {
    if(frontPage === true) {
      return(
        <div className="container content">
          <h3>Our Initiatives</h3>
          <div className='example absolute'>
            <div className='item'>
              <img src={process.env.PUBLIC_URL + "/test/home_workshops.png"} />
              <div className="image-text">Student Workshops</div>
            </div>
            <div className='item'>
                <img src={process.env.PUBLIC_URL + "/test/home_stemconnect.png"} />
                <div className="image-text">STEMConnect Mentoring Program</div>
            </div>
            <div className='item ' >
                <img src={process.env.PUBLIC_URL + "/test/home_industry.png"}  />
                <div className="image-text">Industry Meet-Ups</div>
              </div>
          </div>
          <div className='example absolute'>
            <div className='item'>
              <img src={process.env.PUBLIC_URL + "/test/home_social_events.png"} />
              <div className="image-text">Social Events</div>
            </div>
            <div className='item'>
                <img src={process.env.PUBLIC_URL + "/test/home_rural.png"} />
                <div className="image-text">Rural Trips</div>
            </div>
            <div className='item ' >
                <img src={process.env.PUBLIC_URL + "/test/home_teacher_workshops.png"}  />
                <div className="image-text">Teacher Workshops</div>
            </div>
          </div>
        </div>
        )
    }
  }

  renderBody(frontPage) {
    if(frontPage === true) {
      return(
          <div className="Page-content container content" >
            <h3>Getting Involved</h3>
            <div className='example absolute'>
              <div className='item clickable'>
                <a href={`/library-workshops-public-events`}>
                  <img src={process.env.PUBLIC_URL + "/test/students.png"} />
                </a>
                <div className="panel-text">Students</div>
                </div>
              <div className='item clickable'>
                <a href={`/volunteer-with-us`}>
                  <img src={process.env.PUBLIC_URL + "/test/volunteers.png"} />
                </a>
                <div className="panel-text">Volunteers</div>
                </div>
            </div>
            <div className='example absolute'>
              <div className='item clickable' >
                <a href={`/partners`}>
                  <img src={process.env.PUBLIC_URL + "/test/partners.png"} />
                </a>
                <div className="panel-text">Partners</div>
              </div>
              <div className='item clickable'>
                <a href={`/teachers-in-robotics-day`}>
                  <img src={process.env.PUBLIC_URL + "/test/teachers.png"} />
                </a>
                <div className="panel-text">Teachers</div>
              </div>

            </div>
          </div>
        )
    }
  }

  renderVolunteerEvents() {
    var desc = ["Robogals Brisbane holds 2 Arduino hackathons each year. These are a great opportunity to learn the basics of embedded systems, develop new workshop content, make friends and win prizes!",
                "One of the many marketing stalls that we create for Brisbane’s community is the World Science Festival. This is an opportunity for our volunteers to spend the day at South Bank and talk directly with Brisbane.",
                "We run a variety of campus events at UQ and QUT. These events include launch nights, social hangouts, training days, market days and picnic sessions",
                "Training days are a great way for volunteers to learn more about what happens in a workshop and what to do in them. These days are held multiple times throughout each semester.",
                "Every year, we run at least 2 rural trips going to rural and regional areas of Queensland. These fun trips are a great way to develop public speaking skills and get more involved in the club."];
    var headings = ["Rural Trips", "Hackathon", "World Science Festival", "Training Days", "On Campus Events"];
    var images = [{link:"rural-trips", heading: headings[0], summary: desc[4]},
                  {link:"hackathon", heading: headings[1], summary: desc[0]},
                  {link:"WSF", heading: headings[2], summary: desc[1]},
                  {link:"training-days", heading: headings[3], summary: desc[3]},
                  {link:"on-campus", heading: headings[4], summary: desc[2]}];

    const events = images.map(eventImage => {
      return(
        <div className="events-container content">
          <img className= "event-image" alt="event-image" src={process.env.PUBLIC_URL + "/volunteer-events/" + eventImage.link + ".png"} />
          <div className="info">
            <h3> {eventImage.heading} </h3>
            <p> {eventImage.summary}</p>
          </div>

        </div>
      );
    });
    return events;
  }

  renderPartnerEvents() {
    var desc = ["Held annually in early August, the Robogals Industry Gala night is a night for nibbles, acknowledgement and networking. Industry partners and Robogals are invited to celebrate and commend the year’s achievements whilst enjoying the best of UQ’s facilities and catering. Whilst the Gala is a formal recognition of the hard work of volunteers, it is also an excellent opportunity for networking between students and industry partners.",
                "The trivia night is a fun way for our volunteers to network with our industry contacts and pick their brains about what they do.",
                "As a part of the STEMConnect mentoring program, high school girls had the opportunity to hear from outstanding women in STEM, and network with a high range our companies.",
                "Held in the school holidays, our partner workshops are a great opportunity for parents to expose their kids to the fun world of robots and bring them along for a day at the office.",
                "Every year, we run at least 2 rural trips going to rural and regional areas of Queensland. These fun trips are a great way to develop public speaking skills and get more involved in the club."];
    var headings = ["Industry Gala", "Industry Trivia", "Industry Panel For STEMConnect", "Partner Workshops", "Rural Trips"];
    var images = [{link:"/partner-events/industry_gala", heading: headings[0], summary: desc[0]},
                  {link:"/partner-events/trivia", heading: headings[1], summary: desc[1]},
                  {link:"/partner-events/stemConnect", heading: headings[2], summary: desc[2]},
                  {link:"/partner-events/partner-workshops", heading: headings[3], summary: desc[3]},
                  {link:"/volunteer-events/rural-trips", heading: headings[4], summary: desc[4]}];

    const events = images.map(eventImage => {
      return(
        <div className="events-container content">
          <img className= "event-image" alt="event-image" src={process.env.PUBLIC_URL + eventImage.link + ".png"} />
          <div className="info">
            <h3> {eventImage.heading} </h3>
            <p> {eventImage.summary}</p>
          </div>

        </div>
      );
    });
    return events;
  }


  getEventsLayout() {

    if(this.props.isVolunteerEvents === true) {
      return (
        <div className="content">
          {this.renderVolunteerEvents()}
        </div>
      );
    } else if (this.props.isPartnerEvents === true) {
        return (
          <div className="content">
            {this.renderPartnerEvents()}
          </div>
        );
      }
  }



  render() {
    return (
      <div>
        <Hero title={this.getTitle()} image={this.state.featuredImage} isQuote={this.props.isQuote} />
        <div
          className="Page-content content"
          onClick={this.captureLinks}
          dangerouslySetInnerHTML={this.getBody()}
          />
        {this.getEventsLayout()}
        {this.renderImages(this.props.isQuote)}

        {this.renderBody(this.props.isQuote)}

      </div>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  isQuote: PropTypes.bool,
  isVolunteerEvents: PropTypes.bool,
  isPartnerEvents: PropTypes.bool
};

Page.defaultProps = {
  isQuote: false,
  isVolunteerEvents:false,
  isPartnerEvents: false
}

export default withRouter(Page);
