import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import "../styles/ProductBin.css";

const ProductBin = props => {
  const { productToggle, inventory } = props;
  const renderProductBin = () => {
    return inventory[productToggle].map((product, i) => (
      <ProductCard
        key={product.productName}
        className="product-bin__product-card"
        product={product}
        productName={product.productName}
        price={product.price}
        url={product.url}
        alt={product.alt}
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
