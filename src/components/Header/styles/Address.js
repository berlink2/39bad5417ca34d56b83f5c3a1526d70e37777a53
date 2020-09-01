import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 16px 0 0 16px;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 16px;
  .title {
    color: ${(props) => props.theme.gray3};
    font-size: 12px;
  }
`;

export const AddressSelect = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  align-items: center;
  .arrowDown {
    color: ${(props) => props.theme.red};
  }
`;
