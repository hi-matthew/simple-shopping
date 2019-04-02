import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { toggleCartStatus } from "../redux/actionCreators";
import makeAccessiblePseudoButton from "../utils";
import "../styles/Cart.css";

const Cart = props => {
  const { cartStatus, toggleCart, cart, cartSubtotal } = props;
  const cartClass = cartStatus.includes("open") ? "cart cart--active" : "cart";
  const sendAlert = () =>
    alert(
      `There is where you would be charged $${cartSubtotal}. Thanks for playing around with Simple Shopping!`
    );
  const renderCart = () =>
    cart.map(({ focusProduct, quantity, size }) => (
      <CartItem
        key={`${size}_${focusProduct.productName}`}
        quantity={quantity}
        size={size}
        focusProduct={focusProduct}
      />
    ));

  return (
    <div className={cartClass}>
      <div className="cart__heading">
        <FontAwesomeIcon
          icon="times"
          onClick={toggleCart}
          className="heading__close-cart"
          {...makeAccessiblePseudoButton(toggleCart)}
        />
        <h3>My Shopping Cart</h3>
        <hr className="line line--cart" />
      </div>
      <div className="cart__cart-items">{renderCart()}</div>
      <div className="cart__cart-summary" style={{ color: "white" }}>
        <div className="cart-summary__subtotal">
          <h3>{`Subtotal: $${cartSubtotal || 0}`}</h3>
          <span
            className="cart-summary__checkout-button"
            onClick={sendAlert}
            {...makeAccessiblePseudoButton(sendAlert)}
          >
            Checkout
          </span>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartStatus: PropTypes.string.isRequired,
  toggleCart: PropTypes.func.isRequired,
  cartSubtotal: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      focusProduct: PropTypes.shape({
        alt: PropTypes.string,
        price: PropTypes.string,
        productName: PropTypes.string,
        reviewCount: PropTypes.number,
        url: PropTypes.string
      }),
      quantity: PropTypes.number,
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cartStatus: state.cartStatus,
    cart: state.cart,
    cartSubtotal: state.cartSubtotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCartStatus())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
