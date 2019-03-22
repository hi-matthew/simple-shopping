import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import "../styles/ProductBin.css";

const ProductBin = props => {
  const { productToggle, inventory } = props;
  const renderProductBin = () => {
    return inventory[productToggle].map(({ url, productName, price, alt }) => (
      <ProductCard
        key={productName}
        className="product-bin__product-card"
        productName={productName}
        price={price}
        url={url}
        alt={alt}
      />
    ));
  };

  return <div className="product-bin">{renderProductBin()}</div>;
};

ProductBin.propTypes = {
  productToggle: PropTypes.string.isRequired,
  inventory: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        productName: PropTypes.string,
        price: PropTypes.string,
        url: PropTypes.string,
        alt: PropTypes.string
      })
    )
  ).isRequired
};

const mapStateToProps = state => {
  return {
    productToggle: state.productToggle,
    inventory: state.inventory
  };
};

export default connect(mapStateToProps)(ProductBin);
