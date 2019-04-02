import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ quantity, size, focusProduct }) => (
  <div className="cart-items__single">
    <div className="single__img-container">
      <img src={focusProduct.url} alt={focusProduct.alt} />
    </div>
    <div className="single__detail">
      <span>{focusProduct.productName}</span>
      {focusProduct.productName.includes("Simple") ? (
        <span>Cool, simple shirt that is bound to make you look fresh</span>
      ) : (
        <span>Stylish pair of shoes that is bound to make you stand out</span>
      )}
      <span>{`${size} | Quantity: ${quantity}`}</span>
    </div>
    <h4>{`$${focusProduct.price}`}</h4>
  </div>
);

CartItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  focusProduct: PropTypes.shape({
    alt: PropTypes.string,
    price: PropTypes.string,
    productName: PropTypes.string,
    reviewCount: PropTypes.number,
    url: PropTypes.string
  }).isRequired
};

export default CartItem;
