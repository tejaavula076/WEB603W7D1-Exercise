import React from "react";
import styled from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";

import DarkThemeProvider from "./DarkThemeProvider";
import DarkThemeToggle from "./DarkThemeToggle";
import store from "./redux/store";
import "./App.css";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#202020",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

export const headerBackground = theme("theme", {
  light: "#000",
  dark: "#fff",
});

export const headerText = theme("theme", {
  light: "rgb(10, 209, 199)",
  dark: "rgb(10, 209, 199)",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const SwitchTheme = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${headerBackground};
  color: ${headerText};
`;

const App = () => {
  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
          <SwitchTheme>
            <h1>Theme App</h1>
            <DarkThemeToggle />
          </SwitchTheme>

          <Container>
            <h2>Welcome!</h2>
            <h3>Full Stack Web Development</h3>
          </Container>
        </DarkThemeProvider>
      </ReduxProvider>
    </React.Fragment>
  );
};

export default App;