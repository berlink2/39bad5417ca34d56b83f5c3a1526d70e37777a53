import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
`;

const theme = {
  red: "#f9234a",
  scarlet: "#a23530",
  gray4: "#424749",
  gray3: "#6e7679",
  gray2: "#e2e4e4",
  gray1: "#f1f1f2",
};

const App = () => {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
