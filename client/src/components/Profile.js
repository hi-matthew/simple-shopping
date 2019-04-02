import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import makeAccessiblePseudoButton from "../utils";
import { toggleProfile } from "../redux/actionCreators";
import "../styles/Profile.css";

const Profile = ({ profileStatus, toggleProfile }) => {
  const profileClass =
    profileStatus === "open" ? "profile profile--active" : "profile";
  return (
    <div className={profileClass}>
      <div className="profile__disclaimer">
        <h3>My Profile</h3>
        <FontAwesomeIcon
          icon="times"
          onClick={toggleProfile}
          className="profile__close-window"
          {...makeAccessiblePseudoButton(toggleProfile)}
        />
      </div>
      <div className="profile__coming-soon">
        Sign in/up functionality coming soon!
      </div>
    </div>
  );
};

Profile.propTypes = {
  profileStatus: PropTypes.string.isRequired,
  toggleProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    profileStatus: state.profileStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleProfile: () => dispatch(toggleProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
