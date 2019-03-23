import React from "react";
import Img from "react-image";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
// import makeAccessiblePseudoButton from "../utils";

const ProductCard = props => {
  const { url, productName, price, alt } = props;
  return (
    <article key={productName} className="product-bin__product-card">
      <Img src={url} alt={alt} loader={<Spinner />} />
      <h3>{productName}</h3>
      <h4>{price}</h4>
      <div
        className="product-card__add-to-cart"
        // {...makeAccessiblePseudoButton}
      >
        <span>Add to cart</span>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ProductCard;
