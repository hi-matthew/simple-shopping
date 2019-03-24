import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles/Cart.css";

const Cart = props => {
  const { cartStatus } = props;
  const activeCartStyles = {
    transform: "translateX(0)",
    transition: "transform 300ms ease"
  };
  return (
    <div
      className="cart"
      style={cartStatus === "open" ? activeCartStyles : null}
    >
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
