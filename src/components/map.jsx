import React from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 48.885312,
      lng: 2.341225
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          // lat={this.props.lat}
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="Flat"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
