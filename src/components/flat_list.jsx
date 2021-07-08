import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(({
      imageUrl, name, price, priceCurrency, lat, lng
    }) => {
      return <Flat imageUrl={imageUrl} key={imageUrl} alt="" name={name} price={price} priceCurrency={priceCurrency} lat={lat} lng={lng} setMarker={this.props.setMarker} />;
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
