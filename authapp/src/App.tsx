// import { Counter } from './Counter'
import { ThemeProvider } from "@mui/material";
import "../src/style.css";
import Counter from "./Counter";
import theme from "styleguide/theme";
import ErrorBoundary from "./ErrorBoundary";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";
const App = () => {
  
  return (
    <>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Routes>
	 <Route path="/"  element={<First/>} />
   <Route path="signup"  element={<Second/>} />
   </Routes>
        <h1>Auth apsp {process.env.NODE_ENV}</h1>
        <Counter />
      </ThemeProvider>
    </ErrorBoundary>
    </>
  );
};
export default App;
