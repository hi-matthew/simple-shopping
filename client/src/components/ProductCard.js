import React from "react";
import Img from "react-image";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleModal } from "../redux/actionCreators";
import Spinner from "./Spinner";
import makeAccessiblePseudoButton from "../utils";

const ProductCard = props => {
  // eslint-disable-next-line no-shadow
  const { url, productName, price, alt, toggleModalFunc } = props;
  return (
    <>
      {/* eslint-disable */}
      <article
        key={productName}
        className="product-bin__product-card"
        onClick={() => toggleModalFunc(productName)}
        {...makeAccessiblePseudoButton(toggleModalFunc)}
      >
      {/* eslint-enable */}
        <div className="product-bin__img-container">
          <Img
            src={url}
            alt={alt}
            loader={<Spinner />}
            className="product-bin__product-img"
          />
          <div className="product-bin__product-overlay">
            <span role="img" aria-label="fire emojis">
              Simply 🔥🔥🔥
            </span>
          </div>
        </div>
        <h3>{productName}</h3>
        <h4>{price}</h4>
        <div className="product-card__details-button">
          <span>Details</span>
        </div>
      </article>
    </>
  );
};

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  toggleModalFunc: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    modalStatus: state.modalStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModalFunc: focusProduct => dispatch(toggleModal(focusProduct))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
