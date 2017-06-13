import React, { Component } from 'react';

class Sponsor extends Component {

  getTitle() {
    return this.props.sponsor.title.rendered;
  }

  getBody() {
    return {
      __html: this.props.sponsor.content.rendered
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="title">{this.getTitle()}</h1>

          <div dangerouslySetInnerHTML={this.getBody()} />
        </div>
      </div>
    )
  }
}

export default Sponsor;
