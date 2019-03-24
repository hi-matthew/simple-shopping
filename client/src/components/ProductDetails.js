import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { detailsModalActivated } from "../redux/actionCreators";
import makeAccessiblePseudoButton from "../utils";
import "../styles/ProductDetails.css";

const ProductDetails = props => {
  return (
    <div className="product-details">
      <FontAwesomeIcon
        icon="times"
        onClick={detailsModalActivated}
        className="product-details__close-window"
        {...makeAccessiblePseudoButton(detailsModalActivated)}
      />
      <hr
        className="line"
        style={{ width: "100%", height: "1px", marginTop: "5px" }}
      />
      <span>I'm the modal</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modalIsActivated: state.modalIsActivated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    detailsModalActivated: () => dispatch(detailsModalActivated())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
