import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: auto;
`;

const Date = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #424749;
  background: transparent;
  margin: 8px auto 16px 16px;
`;

const items = new Array(10);

const ItemList = ({ setShowCart }) => {
  return (
    <ItemListContainer>
      <Date>Kamis. 13 Maret 2019</Date>
      <Item setShowCart={setShowCart} />
      <Item setShowCart={setShowCart} />
      <Item setShowCart={setShowCart} />
      <Item setShowCart={setShowCart} />
      <Item setShowCart={setShowCart} />
      <Item setShowCart={setShowCart} />
    </ItemListContainer>
  );
};

export default ItemList;
