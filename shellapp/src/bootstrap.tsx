import React from "react";
// import "./index.css";
import { App } from "./App";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import { createRoot } from "react-dom/client";
import { client } from "services/apollo_SR";
import { ApolloProvider } from "@apollo/client";
import theme from "styleguide/theme";
import { ThemeProvider } from "@mui/material";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);
const store = createStore({
  authName:'_auth',
  authType:'localstorage',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'http:',
});


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
