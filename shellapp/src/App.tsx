import React from "react";
import "../src/style.css";
const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const HocTest = React.lazy(() => import("app1/Hoctest"));
const CounterTwo = React.lazy(() => import("authapp/Auth"));
const First = React.lazy(() => import("authapp/Auth"));
const Register = React.lazy(() => import("authapp/Register"));
const BasicCard = React.lazy(() => import("styleguide/BasicCard"));
const Login = React.lazy(() => import("authapp/Login"));
const Layout = React.lazy(() => import("../src/component/Layout/Layout"));
// import { client } from "services/apollo_SR";
import ErrorBoundary from "./component/ErrorBoundary";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./component/Landing";
import ProtectedRoute from "services/ProtectedRoute";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth"
            element={
              <React.Suspense fallback="Loading">
                <CounterTwo />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <ErrorBoundary>
                <React.Suspense fallback="Loading">
                  <Login />
                </React.Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback="Loading">
                <Register />
              </React.Suspense>
            }
          />
          <Route
            element={
              <React.Suspense>
                {" "}
                <ProtectedRoute element={<Layout />}></ProtectedRoute>
              </React.Suspense>
            }
          >
            <Route path="/dashboard" element={<CounterAppOne />} />
            <Route
              path="/styleguide-card"
              element={
                <React.Suspense fallback="Loading">
                  <BasicCard />
                </React.Suspense>
              }
            />
            <Route path="/" element={<Landing />}>
              {" "}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
