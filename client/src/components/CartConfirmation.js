import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const CartConfirmation = ({ confirmAddToCart }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <FontAwesomeIcon icon="check-circle" className="modal-main__check-mark" />
    <span>{confirmAddToCart.message}</span>
  </div>
);

CartConfirmation.propTypes = {
  confirmAddToCart: PropTypes.shape({
    isActive: PropTypes.bool,
    message: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => {
  return {
    confirmAddToCart: state.confirmAddToCart
  };
};

export default connect(mapStateToProps)(CartConfirmation);
