import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProductImage = ({ inventory, productToggle, modalStatus }) => {
  const { url, alt } = inventory[productToggle].filter(
    obj => obj.productName === modalStatus.focusProduct
  )[0];
  return (
    <div className="modal-body__img-container">
      <img src={`../../${url}`} alt={alt} />
    </div>
  );
};

ProductImage.propTypes = {
  inventory: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        productName: PropTypes.string,
        price: PropTypes.string,
        url: PropTypes.string,
        alt: PropTypes.string
      })
    )
  ).isRequired,
  productToggle: PropTypes.string.isRequired,
  modalStatus: PropTypes.shape({
    active: PropTypes.bool,
    focusProduct: PropTypes.string
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
