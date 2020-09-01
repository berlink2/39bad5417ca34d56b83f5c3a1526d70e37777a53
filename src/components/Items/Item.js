import React from "react";
import { Card, CardBody, CardImage, AddButton } from "./styles/Item";

const img = require("../../assets/images/roasted-chicken.jpg");

const Item = ({ setShowCart }) => {
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
          <AddButton onClick={() => setShowCart(() => true)}>
            ADD <i className="material-icons addButton">add</i>
          </AddButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default Item;
