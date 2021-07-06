import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {

  renderList = () => {
    // return this.props.flats.map((flat) => {
    //   return <Flat flat={flat} key={flat.imageUrl} />;
    // });
    return this.props.flats.map(({
      imageUrl, name, price, priceCurrency
    }) => {
      return <Flat imageUrl={imageUrl} key={imageUrl} alt="" name={name} price={price} priceCurrency={priceCurrency} />;
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
