import React from "react";
import { CartButton, CartContainer } from "./styles/Cart";

const Cart = () => {
  return (
    <CartContainer>
      <CartButton>
        <div className="cartText">
          <h3 className="total">5 Items | Rp 125,000</h3>
          <p className="description">Termasuk ongkos kirim</p>
        </div>
        <div className="cartIcon">
          <i className="material-icons-outlined">shopping_cart</i>
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      </CartButton>
    </CartContainer>
  );
};

export default Cart;
