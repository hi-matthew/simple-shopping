import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleProducts } from "../redux/actionCreators";
import makeAccessiblePsuedoButton from "../utils";
import "../styles/Toggler.css";

const Toggler = props => {
  const { toggleProducts, productToggle } = props;

  const activeToggle = {
    backgroundColor: "black",
    color: "white"
  };

  return (
    <div className="product-type">
      <span
        className="product-type__shirts"
        onClick={toggleProducts}
        style={productToggle === "shirts" ? activeToggle : null}
        {...makeAccessiblePsuedoButton(toggleProducts)}
      >
        Shirts
      </span>
      <span
        className="product-type__shoes"
        onClick={toggleProducts}
        style={productToggle === "shoes" ? activeToggle : null}
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
