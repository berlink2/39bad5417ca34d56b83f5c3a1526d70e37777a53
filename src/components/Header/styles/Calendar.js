import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  max-width: 400px;
  border-bottom: 1px solid ${(props) => props.theme.gray1};
  overflow-x: scroll;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
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

export const DayContainer = styled.p`
  display: flex;
  max-width: 375px;
  background-color: white;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  font-size: 8px;
`;

export const DateContainer = styled.p`
  display: flex;
  max-width: 375px;
  background-color: white;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
`;
