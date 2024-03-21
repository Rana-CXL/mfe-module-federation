import React from "react";
// import "./index.css";

import { App } from './App'

import { createRoot } from "react-dom/client";
// import { client } from "services/apollo_SR";
// import { ApolloProvider } from "@apollo/client";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
  
    <App />
  
    {/* </ApolloProvider> */}
  </React.StrictMode>
);
