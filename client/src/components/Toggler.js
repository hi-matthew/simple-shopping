import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleProducts } from "../redux/actionCreators";
import makeAccessiblePsuedoButton from "../utils";
import "../styles/Toggler.css";

const Toggler = props => {
  const { toggleProducts, productToggle } = props;

  const shirtProductClass =
    productToggle === "shirts"
      ? "product-type__shirts product-type__shirts--active"
      : "product-type__shirts";

  const shoeProductClass =
    productToggle === "shoes"
      ? "product-type__shoes product-type__shoes--active"
      : "product-type__shoes";

  return (
    <div className="product-type">
      <span
        className={shirtProductClass}
        onClick={toggleProducts}
        {...makeAccessiblePsuedoButton(toggleProducts)}
      >
        Shirts
      </span>
      <span
        className={shoeProductClass}
        onClick={toggleProducts}
        {...makeAccessiblePsuedoButton(toggleProducts)}
      >
        Shoes
      </span>
    </div>
  );
};

Toggler.propTypes = {
  toggleProducts: PropTypes.func.isRequired,
  productToggle: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    productToggle: state.productToggle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleProducts: e => dispatch(toggleProducts(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggler);
