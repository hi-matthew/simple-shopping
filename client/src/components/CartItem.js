import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { removeItem } from "../redux/actionCreators";
import makeAccessiblePseudoButton from "../utils";

const CartItem = ({ quantity, size, focusProduct, removeItem }) => (
  <div className="cart-items__single">
    <FontAwesomeIcon
      icon="times"
      onClick={e => removeItem({ e, size, focusProduct })}
      className="cart-items__close-window"
      {...makeAccessiblePseudoButton(e =>
        removeItem({ e, size, focusProduct })
      )}
    />
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
  }).isRequired,
  removeItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: ({ e, size, focusProduct }) =>
      dispatch(removeItem({ e, size, focusProduct }))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
