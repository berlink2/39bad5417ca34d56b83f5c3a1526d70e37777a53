import React from "react";
import { Container, AddressContainer, AddressSelect } from "./styles/Address";

const Address = ({ setShowModal }) => {
  return (
    <Container>
      <i className="material-icons backButton">keyboard_backspace</i>
      <AddressContainer onClick={() => setShowModal(true)}>
        <span className="title">Alamat Pengantaran</span>
        <AddressSelect>
          Tokopedia Tower
          <i className="material-icons arrowDown">keyboard_arrow_down</i>
        </AddressSelect>
      </AddressContainer>
    </Container>
  );
};

export default Address;
