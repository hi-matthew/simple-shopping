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
const ProductDetails = ({ modalStatus }) => {
  const { productName, price } = modalStatus.focusProduct;
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
    modalStatus: state.modalStatus,
    inventory: state.inventory,
    productToggle: state.productToggle
  };
};

export default connect(mapStateToProps)(ProductDetails);
