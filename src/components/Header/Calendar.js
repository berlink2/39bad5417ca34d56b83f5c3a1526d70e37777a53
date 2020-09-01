import React, { useState } from "react";
import {
  CalendarContainer,
  Button,
  DayContainer,
  DateContainer,
} from "./styles/Calendar";

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
