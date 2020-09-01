import styled from "styled-components";

export const Card = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 375px;
  width: 92%;
  max-width: 350px;
  font-size: 12px;
  background: transparent;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  margin-bottom: 24px;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  height: 225px;
  width: auto;
  max-width: 350px;
  background: transparent;
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 34%;
  width: 90%;
  max-width: 340px;
  padding: 8px 16px;
  letter-spacing: 0.03em;

  .rating {
    display: flex;
    margin: 4px 0;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
  }

  .rating > .star {
    color: ${(props) => props.theme.red};
    font-size: 16px;
    margin-left: 2px;
  }

  .title {
    margin: 4px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.gray4};
  }

  .subtitle {
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.gray3};
  }

  .price-container {
    margin-top: 16px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.gray4};
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.red};
  color: white;
  width: 90px;
  height: 35px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  .addButton {
    font-size: 18px;
    font-weight: 600;
  }
`;
