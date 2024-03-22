import React from "react";
// import "./index.css";

import { App } from "./App";

import { createRoot } from "react-dom/client";
import { client } from "services/apollo_SR";
import { ApolloProvider } from "@apollo/client";
import theme from "styleguide/theme";
import { ThemeProvider } from "@mui/material";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
