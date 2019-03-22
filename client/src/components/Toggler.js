import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleProducts } from "../redux/actionCreators";
import makeAccessiblePsuedoButton from "../utils";
import "../styles/Toggler.css";

const Toggler = props => {
  const { toggleProducts } = props;
  return (
    <div className="product-type">
      <span
        className="product-type__shirts product-type--active"
        onClick={toggleProducts}
        {...makeAccessiblePsuedoButton(toggleProducts)}
      >
        Shirts
      </span>
      <span
        className="product-type__shoes"
        onClick={toggleProducts}
        {...makeAccessiblePsuedoButton(toggleProducts)}
      >
        Shoes
      </span>
    </div>
  );
};

Toggler.propTypes = {
  toggleProducts: PropTypes.func.isRequired
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
