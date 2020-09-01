import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 375px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.scarlet};
  color: white;
  width: 95%;
  height: 50px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;

  .cartText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4px;

    .total {
      margin: 0;
      font-size: 14px;
    }

    .description {
      margin: 0;
      font-size: 12px;
    }
  }

  .cartIcon {
    display: flex;
    flex-direction: row;
  }
`;

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
