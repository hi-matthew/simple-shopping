import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateQuantity } from "../../redux/actionCreators";
import makeAccessiblePseudoButton from "../../utils";

const Form = ({ quantity, updateQuantity }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.keyCode === "13") return;
    console.log("form submitted!");
    // addToCart();
  };
  return (
    <form className="product-details__form" onSubmit={e => handleSubmit(e)}>
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
        </div>
        <input type="submit" id="submit" value="Add to cart" />
      </div>
    </form>
  );
};

Form.propTypes = {
  quantity: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    quantity: state.quantity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateQuantity: e => dispatch(updateQuantity(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
