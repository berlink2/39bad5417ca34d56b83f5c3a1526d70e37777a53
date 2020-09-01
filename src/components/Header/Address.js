import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 16px 0 0 16px;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 16px;
  .title {
    color: ${(props) => props.theme.gray3};
    font-size: 12px;
  }
`;

const AddressSelect = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  align-items: center;
  .arrowDown {
    color: ${(props) => props.theme.red};
  }
`;

const Address = () => {
  return (
    <Container>
      <i className="material-icons backButton">keyboard_backspace</i>
      <AddressContainer>
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
