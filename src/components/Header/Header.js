import React from "react";
import Address from "./Address";
import Calendar from "./Calendar";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: white;
  overflow-y: scroll;
  min-height: 100px;
  max-width: 400px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Address />
      <Calendar />
    </HeaderContainer>
  );
};

export default Header;
