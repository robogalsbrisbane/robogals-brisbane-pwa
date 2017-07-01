import React, { Component } from 'react';
import { Map, CircleMarker, Popup, TileLayer } from 'react-leaflet';

class WorkshopMap extends Component {
  constructor(props) {
    super(props);

    this.markers = [
      {location: [-27.497686, 153.014022], text: 'University of Queensland'},
      {location: [-27.476547, 153.027841], text: 'Queensland University of Technology'},
      {location: [-27.476690, 153.020662], text: 'Griffith'}
    ]
  }

  createMarker(location, text) {
    return (
      <CircleMarker center={location} radius={8}>
        <Popup>
          <span>{text}</span>
        </Popup>
      </CircleMarker>
    )
  }

  renderMarkers() {
    return this.markers.map((marker) => {
      return this.createMarker(marker.location, marker.text);
    });
  }

  listMarkers() {
    return this.markers.map((marker) => {
      return <li>{marker.text}</li>;
    });
  }

  render() {
    const mapStyle = {
      minHeight: '400px'
    };

    const position = [-27.4698, 153.0251];

    return (
      <div>
				<Map center={position} zoom={13} style={mapStyle}>
					<TileLayer
						url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
						attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;
        <a href="https://carto.com/attribution">CARTO</a>'
					/>

          {this.renderMarkers()}
				</Map>

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
