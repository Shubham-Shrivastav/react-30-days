import React from 'react';

const Product = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h5>Price: {props.price}</h5>
    </div>
  );
};
export default Product;
