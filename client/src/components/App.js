import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadInventory } from "../redux/actionCreators";
import "../fontAwesomeSetUp";
import ProductBin from "./ProductBin";
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
    return (
      <>
        <Toggler />
        <ProductBin />
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  loadInventory: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    inventory: state.inventory
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
