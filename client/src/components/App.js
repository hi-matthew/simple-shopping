import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadInventory } from "../redux/actionCreators";
import "../fontAwesomeSetUp";
import ProductBin from "./ProductBin";
import ProductDetails from "./ProductDetails/ProductDetails";
import Toggler from "./Toggler";
import Footer from "./Footer";
import "../styles/App.css";
import inventory from "../inventory";

class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.loadInventory(inventory);
  }

  render() {
    const { modalStatus } = this.props;
    return (
      <>
        <Toggler />
        <ProductBin />
        {modalStatus.isActive ? <ProductDetails /> : null}
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  loadInventory: PropTypes.func.isRequired,
  modalStatus: PropTypes.shape({
    isActive: PropTypes.bool,
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
    modalStatus: state.modalStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadInventory: localInventory => dispatch(loadInventory(localInventory))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
