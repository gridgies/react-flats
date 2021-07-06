import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    // move map marker (props)
    // console.log(event);
    // console.log(this.props.lat);
    // console.log(this.props.lng);
    // this.props.marker(this.props.id);
  }

  render() {
    const src = `${this.props.imageUrl}`;
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${src})`}}
        onClick={this.handleClick}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
