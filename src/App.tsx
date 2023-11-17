import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";

import "./App.scss";

import Split from "./views/Split/Split";

import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/Split" element={<Split />} />
        <Route path="*" element={<Split />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
