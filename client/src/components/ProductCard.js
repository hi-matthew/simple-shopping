import React from "react";
import Img from "react-image";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { detailsModalActivated } from "../redux/actionCreators";
import Spinner from "./Spinner";
import makeAccessiblePseudoButton from "../utils";

const ProductCard = props => {
  const {
    url,
    productName,
    price,
    alt,
    detailsModalActivated,
    modalIsActivated
  } = props;
  return (
    <article
      key={productName}
      className="product-bin__product-card"
      onClick={detailsModalActivated}
      {...makeAccessiblePseudoButton(detailsModalActivated)}
    >
      <Img src={url} alt={alt} loader={<Spinner />} />
      <h3>{productName}</h3>
      <h4>{price}</h4>
      <div className="product-card__details-button">
        <span>Details</span>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  modalIsActivated: PropTypes.bool.isRequired
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
)(ProductCard);
