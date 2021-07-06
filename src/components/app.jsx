import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      lat: 48.888839,
      lng: 2.339208
    };
  }

  render() {
    return (
      <div>
          <FlatList flats={this.state.flats} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
