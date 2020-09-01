import React, { useState, useEffect } from "react";
import { MealButton, MealtimeContainer, ShowMealtime } from "./styles/Mealtime";

const Mealtime = () => {
  const [clickedMeal, setClickedMeal] = useState("lunch");
  const [showMealtime, setShowMealTime] = useState(true);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pos]);

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
