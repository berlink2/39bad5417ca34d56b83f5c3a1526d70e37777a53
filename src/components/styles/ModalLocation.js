import styled from "styled-components";

export const ModalAnimation = styled.div`
  .open {
    visibility: visible;
    transition: all 200ms ease-in;
    transform: translate(0, 0);
  }

  .closed {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, 100%);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  width: 100%;
  max-width: 375px;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  z-index: 1;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 375px;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  position: absolute;
  z-index: 1;
`;

export const LocationModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: black;
  width: 100%;
  height: 84%;
  border: none;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  z-index: 10;
  position: absolute;
  bottom: 0;

  .icon {
    max-width: 30px;
    margin: 0 0 auto auto;
  }

  .poweredBy {
    height: 6%;

    p {
      display: flex;
      align-content: center;
      align-items: center;
      margin: auto auto 12px auto;
      font-size: 11px;
      color: ${(props) => props.theme.gray4};

      img {
        max-height: 20px;
        margin-left: 4px;
      }
    }
  }
`;

export const Search = styled.div`
  padding: 16px;

  h3 {
    width: 90%;
    font-size: 24px;
    font-weight: 600;
    margin: 8px 0 16px 0;
  }

  .searchLocationIcon {
    color: ${(props) => props.theme.red};
    position: absolute;
    top: 131px;
    left: 30px;
  }

  input {
    padding: 12px;
    background-color: white;
    padding-left: 50px;
    width: 80%;
    border: 1px solid ${(props) => props.theme.gray1};
    border-radius: 5px;
    outline: none;
    font-size: 14px;
  }
`;

export const SearchResults = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 65%;
  overflow: scroll;
`;

export const SearchResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  padding-top: 16px;

  .resultIcon {
    margin: 12px auto 0 auto;
    color: ${(props) => props.theme.gray3};
  }

  img {
    padding-left: 4px;
  }

  .locationResult {
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.gray1};

    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.gray4};
    }

    p {
      margin: 0;
      max-height: 30px;
      padding-bottom: 12px;
      width: 300px;
      font-size: 12px;
      color: ${(props) => props.theme.gray3};
      overflow: hidden;
    }
  }
`;
