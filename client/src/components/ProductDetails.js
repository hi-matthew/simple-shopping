import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Heading from "./ProductDetailsParts/Heading";
import CartConfirmation from "./CartConfirmation";
import ProductDetailsBody from "./ProductDetailsParts/ProductDetailsBody";
import "../styles/ProductDetails.css";

// eslint-disable-next-line no-shadow
const ProductDetails = ({ confirmAddToCart }) => {
  return (
    <div className="modal">
      <div className="modal__modal-main">
        <Heading />
        <div className="modal-main__modal-body">
          {confirmAddToCart.isActive ? (
            <CartConfirmation />
          ) : (
            <ProductDetailsBody />
          )}
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
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

export default connect(mapStateToProps)(ProductDetails);
