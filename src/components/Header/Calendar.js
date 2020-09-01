import React, { useState } from "react";
import styled, { css } from "styled-components";

const CalendarContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  max-width: 400px;
  border-bottom: 1px solid ${(props) => props.theme.gray1};
  overflow-x: scroll;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: white;
  min-height: 64px;
  min-width: 64px;

  border: none;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.gray4};
      border-radius: 50%;
      min-height: 48px;
      min-width: 48px;
      p {
        background-color: transparent;
        color: white;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      p {
        background-color: transparent;
        color: ${(props) => props.theme.gray2};
      }
    `}
`;

const DayContainer = styled.p`
  display: flex;
  max-width: 375px;
  background-color: white;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  font-size: 8px;
`;

const DateContainer = styled.p`
  display: flex;
  max-width: 375px;
  background-color: white;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
`;

const Dates = [
  { id: 0, date: 10, day: "SEN" },
  { id: 1, date: 11, day: "SEL" },
  { id: 2, date: 12, day: "RAB" },
  { id: 3, date: 13, day: "KAM" },
  { id: 4, date: 14, day: "JUM" },
  { id: 5, date: 15, day: "SAB" },
  { id: 6, date: 16, day: "MIN" },
  { id: 7, date: 17, day: "SEN" },
  { id: 8, date: 18, day: "SEL" },
  { id: 9, date: 19, day: "RAB" },
  { id: 10, date: 20, day: "KAM" },
  { id: 11, date: 21, day: "JUM" },
  { id: 12, date: 22, day: "SAB" },
  { id: 13, date: 23, day: "MIN" },
];

const Calendar = () => {
  const [clickedDate, setClickedDate] = useState(3);

  function RenderDate({ id, day, date, active }) {
    return (
      <Button
        disabled={day === "SAB" || day === "MIN"}
        active={active}
        onClick={() => setClickedDate(() => id)}
      >
        <DayContainer>{day}</DayContainer>
        <DateContainer>{date}</DateContainer>
      </Button>
    );
  }

  return (
    <CalendarContainer>
      {Dates.map((date) => {
        return (
          <RenderDate
            key={date.id}
            id={date.id}
            date={date.date}
            day={date.day}
            active={clickedDate === date.id}
          />
        );
      })}
    </CalendarContainer>
  );
};

export default Calendar;
