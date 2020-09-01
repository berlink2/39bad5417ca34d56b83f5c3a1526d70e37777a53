import styled, { css } from "styled-components";

export const ShowMealtime = styled.div`
  margin-bottom: 64px;
  .visible {
    visibility: visible;
    transition: all 300ms ease-in;
  }

  .hidden {
    visibility: hidden;
    transition: all 300ms ease-out;
    transform: translate(0, -25%);
  }
`;

export const MealtimeContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  max-width: 400px;
  background-color: white;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  width: 100%;
`;

export const MealButton = styled.button`
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
