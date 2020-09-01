import React from "react";
import styled from "styled-components";

const img = require("../../assets/images/roasted-chicken.jpg");

const Card = styled.div`
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

const CardImage = styled.img`
  height: 225px;
  width: auto;
  max-width: 350px;
  background: transparent;
  object-fit: cover;
`;

const CardBody = styled.div`
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

const Add = styled.svg`
  fill: white;
  width: 16px;
  height: 16px;
`;

const AddButton = styled.button`
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
`;

const Item = () => {
  return (
    <Card>
      <CardImage src={img} alt="roast chicken" />
      <CardBody>
        <div className="rating">
          4.5
          <i className="material-icons star">star_rate</i>
          <i className="material-icons star">star_rate</i>
          <i className="material-icons star">star_rate</i>
          <i className="material-icons star">star_rate</i>
          <i className="material-icons star">star_half</i>
        </div>
        <h1 className="title">Roasted Chicken with Scrambled Egg</h1>
        <h2 className="subtitle">by Kulina • Uptown Lunch</h2>
        <div className="price-container">
          Rp 35,0000
          <AddButton>
            ADD
            <Add
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </Add>
          </AddButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default Item;
