import React from "react";
import Address from "./Address";
import Calendar from "./Calendar";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
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
