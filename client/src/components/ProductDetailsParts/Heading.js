import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleModal } from "../../redux/actionCreators";
import makeAccessiblePseudoButton from "../../utils";

const Heading = ({ toggleModal }) => {
  return (
    <>
      <FontAwesomeIcon
        icon="times"
        onClick={toggleModal}
        className="modal-main__close-window"
        {...makeAccessiblePseudoButton(toggleModal)}
      />
      <hr className="line line--modal" />
    </>
  );
};

Heading.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Heading);
