import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Heading from "./ProductDetailsParts/Heading";
import ProductImage from "./ProductDetailsParts/ProductImage";
import Description from "./ProductDetailsParts/Description";
import ReviewsBin from "./ProductDetailsParts/ReviewsBin";
import Form from "./ProductDetailsParts/Form";
import "../styles/ProductDetails.css";

// eslint-disable-next-line no-shadow
const ProductDetails = ({ inventory, modalStatus, productToggle }) => {
  const { productName, price } = inventory[productToggle].filter(
    obj => obj.productName === modalStatus.focusProduct
  )[0];
  return (
    <div className="modal">
      <div className="modal__modal-main">
        <Heading />
        <div className="modal-main__modal-body">
          <ProductImage />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "25px"
            }}
          >
            <div className="modal-body__product-details">
              <div className="product-details__heading">
                <h2>{productName}</h2>
                <ReviewsBin />
                <h3 className="heading__price">{price}</h3>
              </div>
              <hr className="line line--modal" style={{ margin: "20px 0" }} />
              <Description />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
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
    modalStatus: state.modalStatus,
    inventory: state.inventory,
    productToggle: state.productToggle
  };
};

export default connect(mapStateToProps)(ProductDetails);
