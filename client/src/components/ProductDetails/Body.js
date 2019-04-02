import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductImage from "./ProductImage";
import ReviewsBin from "./ReviewsBin";
import Description from "./Description";
import Form from "../Form/Form";

const Body = ({ modalStatus }) => {
  const { productName, price } = modalStatus.focusProduct;
  return (
    <>
      <ProductImage />
      <div className="modal-body__detail-container">
        <div className="modal-body__product-details">
          <div className="product-details__heading">
            <h2>{productName}</h2>
            <ReviewsBin />
            <h3 className="heading__price">{`$${price}`}</h3>
          </div>
          <hr className="line line--modal" style={{ margin: "20px 0" }} />
          <Description />
        </div>
        <Form />
      </div>
    </>
  );
};

Body.propTypes = {
  modalStatus: PropTypes.shape({
    active: PropTypes.bool,
    focusProduct: PropTypes.shape({
      productName: PropTypes.string,
      url: PropTypes.string,
      alt: PropTypes.string,
      price: PropTypes.string,
      reviewCount: PropTypes.number
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return {
    modalStatus: state.modalStatus
  };
};

export default connect(mapStateToProps)(Body);
