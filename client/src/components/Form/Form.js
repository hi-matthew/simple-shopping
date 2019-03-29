import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateQuantity, addToCart } from "../../redux/actionCreators";
import ShirtSizeOptions from "./ShirtSizeOptions";
import ShoeSizeOptions from "./ShoeSizeOptions";
import makeAccessiblePseudoButton from "../../utils";

const Form = ({
  quantity,
  updateQuantity,
  addToCart,
  focusProduct,
  productToggle
}) => {
  return (
    <form
      className="product-details__form"
      onSubmit={e => addToCart(e, focusProduct)}
    >
      <div className="form__size-select">
        <span>*Size</span>
        <select id="size" name="size" type="select">
          {productToggle === "shirts" ? (
            <ShirtSizeOptions />
          ) : (
            <ShoeSizeOptions />
          )}
        </select>
      </div>
      <div className="form__submit-container">
        <div className="submit-container__button-container">
          {/* eslint-disable */}
          <span
            className="button-container__decrementer"
            onClick={updateQuantity}
            {...makeAccessiblePseudoButton(updateQuantity)}
          >
            -
          </span>
          <input
            type="text"
            className="button-container__value"
            name="quantity"
            value={quantity}
            readOnly
            onKeyPress={e => e.preventDefault()}
          />
          <span
            className="button-container__incrementer"
            onClick={updateQuantity}
            {...makeAccessiblePseudoButton(updateQuantity)}
          >
            +
          </span>
          {/* eslint-enable */}
        </div>
        <input type="submit" id="submit" value="Add to cart" />
      </div>
    </form>
  );
};

Form.propTypes = {
  quantity: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  focusProduct: PropTypes.shape({
    productName: PropTypes.string,
    url: PropTypes.string,
    alt: PropTypes.string,
    price: PropTypes.string,
    reviewCount: PropTypes.number
  }).isRequired,
  productToggle: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    quantity: state.quantity,
    focusProduct: state.modalStatus.focusProduct,
    cartInventory: state.cartInventory,
    productToggle: state.productToggle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateQuantity: e => dispatch(updateQuantity(e)),
    addToCart: (e, focusProduct) => dispatch(addToCart(e, focusProduct))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
