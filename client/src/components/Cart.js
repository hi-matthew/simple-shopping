import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles/Cart.css";

const Cart = props => {
  const { cartStatus } = props;
  const cartClass = cartStatus.includes("open") ? "cart cart--active" : "cart";

  return (
    <div className={cartClass}>
      <span>I am the cart!</span>
    </div>
  );
};

Cart.propTypes = {
  cartStatus: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    cartStatus: state.cartStatus
  };
};

export default connect(mapStateToProps)(Cart);
