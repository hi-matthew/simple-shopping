import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewsBin = ({ inventory, productToggle, modalStatus }) => {
  const { reviewCount } = inventory[productToggle].filter(
    obj => obj.productName === modalStatus.focusProduct
  )[0];
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
  inventory: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        productName: PropTypes.string,
        price: PropTypes.string,
        url: PropTypes.string,
        alt: PropTypes.string
      })
    )
  ).isRequired,
  productToggle: PropTypes.string.isRequired,
  modalStatus: PropTypes.shape({
    active: PropTypes.bool,
    focusProduct: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => {
  return {
    inventory: state.inventory,
    modalStatus: state.modalStatus,
    productToggle: state.productToggle
  };
};

export default connect(
  mapStateToProps,
  null
)(ReviewsBin);
