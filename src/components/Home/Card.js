import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { id, title, price, image } = this.props;
    return (
      <div name={id}>
        <img src={image} alt={title} />
        <span>{title}</span>
        <span>{price}</span>
      </div>
    );
  }
}

export default Card;
