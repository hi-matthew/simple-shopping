import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleModal, updateQuantity } from "../redux/actionCreators";
import makeAccessiblePseudoButton from "../utils";
import "../styles/ProductDetails.css";

// eslint-disable-next-line no-shadow
const ProductDetails = ({
  toggleModal,
  inventory,
  modalStatus,
  productToggle,
  updateQuantity,
  quantity
}) => {
  const [productInfo] = inventory[productToggle].filter(
    obj => obj.productName === modalStatus.focusProduct
  );
  const handleSubmit = e => {
    e.preventDefault();
    if (e.keyCode === "13") return;
    console.log("form submitted!");
    // addToCart();
  };
  // const { url, productName, price, alt } = productInfo;
  return (
    <div className="modal">
      <div className="modal__modal-main">
        <FontAwesomeIcon
          icon="times"
          onClick={toggleModal}
          className="modal-main__close-window"
          {...makeAccessiblePseudoButton(toggleModal)}
        />
        <hr className="line line--modal" />
        <div className="modal-main__modal-body">
          <div className="modal-body__img-container">
            <img src={`../../${productInfo.url}`} alt={productInfo.alt} />
          </div>
          <div className="modal-body__product-details">
            <div className="product-details__heading">
              <h2>{productInfo.productName}</h2>
              <div style={{ display: "flex" }}>
                <div className="heading__reviews">
                  <FontAwesomeIcon
                    className="reviews__review-star"
                    icon="star"
                  />
                  <FontAwesomeIcon
                    className="reviews__review-star"
                    icon="star"
                  />
                  <FontAwesomeIcon
                    className="reviews__review-star"
                    icon="star"
                  />
                  <FontAwesomeIcon
                    className="reviews__review-star"
                    icon="star"
                  />
                  <FontAwesomeIcon
                    className="reviews__review-star--empty"
                    icon="star"
                  />
                </div>
                <span className="reviews__divider">|</span>
                <span className="reviews__review-count">(X) reviews</span>
                <span className="reviews__divider">|</span>
                <span className="reviews__add-review">Add your review</span>
              </div>
              <h3 className="heading__price">{productInfo.price}</h3>
            </div>
            <hr className="line line--modal" style={{ margin: "20px 0" }} />
            <div className="product-details__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
              ad cum veniam rem iure ipsam laborum provident. Necessitatibus
              ipsum debitis eveniet distinctio deserunt omnis officia, a modi
              veritatis? Quis.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
              ad cum veniam rem iure ipsam laborum provident. Necessitatibus
              ipsum debitis eveniet distinctio deserunt omnis officia, a modi
              veritatis? Quis.
            </div>
            <form
              className="product-details__form"
              onSubmit={e => handleSubmit(e)}
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
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  productToggle: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    modalStatus: state.modalStatus,
    inventory: state.inventory,
    productToggle: state.productToggle,
    quantity: state.quantity,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    updateQuantity: e => dispatch(updateQuantity(e))
    // addToCart: () => dispatch(addToCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
