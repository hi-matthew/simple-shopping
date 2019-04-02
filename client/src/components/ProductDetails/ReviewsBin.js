import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewsBin = ({ modalStatus }) => {
  const { reviewCount } = modalStatus.focusProduct;
  return (
    <div style={{ display: "flex" }}>
      <div className="heading__reviews">
        <FontAwesomeIcon className="reviews__review-star" icon="star" />
        <FontAwesomeIcon className="reviews__review-star" icon="star" />
        <FontAwesomeIcon className="reviews__review-star" icon="star" />
        <FontAwesomeIcon className="reviews__review-star" icon="star" />
        <FontAwesomeIcon className="reviews__review-star--empty" icon="star" />
      </div>
      <span className="reviews__divider">|</span>
      <span className="reviews__review-count">
        {`${reviewCount} ${reviewCount === 1 ? "review" : "reviews"}`}
      </span>
      <span className="reviews__divider">|</span>
      <span className="reviews__add-review">Add your review</span>
    </div>
  );
};

ReviewsBin.propTypes = {
  modalStatus: PropTypes.shape({
    active: PropTypes.bool,
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
    modalStatus: state.modalStatus
  };
};

export default connect(mapStateToProps)(ReviewsBin);
