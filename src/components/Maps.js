import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export  class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}
      initialCenter={{
        lat: this.props.lat,
        lng: this.props.long
      }}
      style={styles.map}
      >
        <Marker name={'Current location'} position={{lat: this.props.lat, lng: this.props.long}}  />
      </Map>
    );
  }
}
let styles ={
    map:{
        width: '50vw',
        height : '50vh',
        marginTop : '25vh',
        marginLeft : '20vw',
        borderRadius : '50px',

    }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC9j-AvAaWjXHurfeMLhv7zdFwGlLO-60o')
})(MapContainer)