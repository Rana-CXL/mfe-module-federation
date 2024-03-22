import { ThemeProvider } from "@mui/material";
import "../src/style.css";
import Counter from "./Counter";
import theme from "styleguide/theme";
import ErrorBoundary from "./ErrorBoundary";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="authlogin" element={<Login />} />
            <Route path="authregister" element={<Register />}></Route>
          </Routes>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};
export default App;
