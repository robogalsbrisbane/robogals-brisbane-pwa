import React, { Component } from 'react';

class WorkshopMap extends Component {
  constructor(props) {
    super(props);
    this.map = null;

    this.markers = [
      {position: {lat: -27.497686, lng: 153.014022}, title: 'University of Queensland'},
      {position: {lat: -27.476547, lng: 153.027841}, title: 'Queensland University of Technology'},
      {position: {lat: -27.476690, lng: 153.020662}, title: 'Griffith'}
    ]

    this.markerObjs = [];
    this.options = {
      center: {lat: -27.4698, lng: 153.0251},
      zoom: 13
    };
    this.setupMap = this.setupMap.bind(this);
  }

  createMarker(position, title) {
    const marker = new window.google.maps.Marker({
      map: this.map,
      position: position
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: `
      <div>
        <h1>${title}</h1>
      </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker)
    });

    this.markerObjs.push(marker);
  }

  renderMarkers() {
    this.markers.map((marker) => this.createMarker(marker.position, marker.title));
  }

  listMarkers() {
    return this.markers.map((marker) => {
      return <li key={marker.title}>{marker.title}</li>;
    });
  }

  setupMap(ref) {
    if(ref) {
      this.map = new window.google.maps.Map(ref, this.options);

      this.renderMarkers();
    }
  }

  render() {

    const style = {height: '300px'};

    return (
      <div>

        <div ref={this.setupMap} style={style} />

        <div className="content">
          <h1>Upcoming Events</h1>
          
          <ul>
            {this.listMarkers()}
          </ul>
        </div>
      
      </div>
    );
  }

}

export default WorkshopMap;
