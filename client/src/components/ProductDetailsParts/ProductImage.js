import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProductImage = ({ modalStatus }) => {
  const { url, alt } = modalStatus.focusProduct;
  return (
    <div className="modal-body__img-container">
      <img src={`../../${url}`} alt={alt} />
    </div>
  );
};

ProductImage.propTypes = {
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
    inventory: state.inventory,
    modalStatus: state.modalStatus,
    productToggle: state.productToggle
  };
};

export default connect(mapStateToProps)(ProductImage);
