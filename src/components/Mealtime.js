import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ShowMealtime = styled.div`
  .visible {
    visibility: visible;
    transition: all 200ms ease-in;
  }

  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const MealtimeContainer = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  max-width: 400px;
  background-color: white;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  width: 100%;
`;

const MealButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 175px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.gray1};
  background: white;
  color: ${(props) => props.theme.gray3};
  cursor: pointer;

  ${(props) =>
    props.lunch &&
    css`
      border-radius: 8px 0 0 8px;
    `}

  ${(props) =>
    props.dinner &&
    css`
      border-radius: 0 8px 8px 0;
    `}

	${(props) =>
    props.active &&
    css`
      outline: none;
      background: ${(props) => props.theme.gray4};
      color: white;
    `}
`;

const Mealtime = () => {
  const [clickedMeal, setClickedMeal] = useState("lunch");
  const [showMealtime, setShowMealTime] = useState(true);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () =>{
    //     window.removeEventListener("scroll", handleScroll);
    // }
  }, []);

  const handleScroll = () => {
    setPos(() => document.body.getBoundingClientRect().top);
    setShowMealTime(() => document.body.getBoundingClientRect().top > pos);
  };

  return (
    <ShowMealtime>
      <MealtimeContainer className={showMealtime ? "visible" : "hidden"}>
        <MealButton
          lunch
          active={clickedMeal === "lunch"}
          onClick={() => setClickedMeal(() => "lunch")}
        >
          Lunch
        </MealButton>
        <MealButton
          dinner
          active={clickedMeal === "dinner"}
          onClick={() => setClickedMeal(() => "dinner")}
        >
          Dinner
        </MealButton>
      </MealtimeContainer>
    </ShowMealtime>
  );
};

export default Mealtime;
