import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateQuantity, addToCart } from "../../redux/actionCreators";
import makeAccessiblePseudoButton from "../../utils";

const Form = ({ quantity, updateQuantity, addToCart, focusProduct }) => {
  return (
    <form
      className="product-details__form"
      onSubmit={e => addToCart(e, focusProduct)}
    >
      <div className="form__size-select">
        <span>*Size</span>
        <select id="size" name="size" type="select">
          <option value="x-small">X-Small</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="x-large">X-Large</option>
          <option value="xx-large">XX-Large</option>
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
            value={Number(quantity)}
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
  }).isRequired
};

const mapStateToProps = state => {
  return {
    quantity: state.quantity,
    focusProduct: state.modalStatus.focusProduct,
    cartInventory: state.cartInventory
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
