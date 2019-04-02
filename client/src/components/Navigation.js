import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toggleCartStatus, toggleProfile } from "../redux/actionCreators";
import makeAccessiblePsuedoButton from "../utils";
import Profile from "./Profile";
import Cart from "./Cart";
import "../styles/Navigation.css";

const Navigation = props => {
  const { toggleCartStatus, toggleProfile } = props;
  return (
    <nav className="navigation">
      <Profile />
      <span
        className="navigation__profile-container"
        onClick={toggleProfile}
        {...makeAccessiblePsuedoButton(toggleProfile)}
      >
        <FontAwesomeIcon
          className="navigation__icon navigation__icon--profile"
          icon="user"
        />
      </span>
      <h1>
        <Link to="/" className="link link--heading">
          Simple Shopping
        </Link>
      </h1>
      <span
        className="navigation__cart-container closed"
        onClick={toggleCartStatus}
        {...makeAccessiblePsuedoButton(toggleCartStatus)}
      >
        <FontAwesomeIcon
          className="navigation__icon navigation__icon--cart"
          icon="shopping-cart"
        />
      </span>
      <Cart />
    </nav>
  );
};

Navigation.propTypes = {
  toggleCartStatus: PropTypes.func.isRequired,
  toggleProfile: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartStatus: () => dispatch(toggleCartStatus()),
    toggleProfile: () => dispatch(toggleProfile())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
