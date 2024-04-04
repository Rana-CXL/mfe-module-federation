import React from "react";
import "../src/style.css";
const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const HocTest = React.lazy(() => import("app1/Hoctest"));
const CounterTwo = React.lazy(() => import("authapp/Auth"));
const Login = React.lazy(() => import("authapp/Login"));
const Register = React.lazy(() => import("authapp/Register"));
const BasicCard = React.lazy(() => import("styleguide/BasicCard"));
const DemoPubSub = React.lazy(() => import("eventpublisher/DemoPubSub"));
const Subscriber = React.lazy(() => import("app1/Subscriber"));
const Publisher = React.lazy(() => import("eventpublisher/Publisher"));
import { useCustomHook1, useCustomHook2 } from "services/customHooksSR";
import { client } from "services/apollo_SR";
import ShellContainer from "./component/ShellContainer";
import ErrorBoundary from "./component/ErrorBoundary";

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Landing from "./component/Landing";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index={true} element={<Landing />} />
          </Route>
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
            path="/DemoPubSub"
            element={
              <ErrorBoundary>
                <React.Suspense fallback="Loading">
                  <DemoPubSub />
                  <CounterAppOne />
                </React.Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/Publisher"
            element={
              <ErrorBoundary>
                <React.Suspense fallback="Loading">
                  <Publisher />
                  {/* <Subscriber /> */}
                </React.Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/subscriber"
            element={
              <ErrorBoundary>
                <React.Suspense fallback="Loading">
                  <Subscriber />
                </React.Suspense>
              </ErrorBoundary>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ErrorBoundary>
                <React.Suspense fallback="Loading">
                  <CounterAppOne />
                </React.Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <>

      <h1>This is root application in {process.env.NODE_ENV} mode</h1>
      <ErrorBoundary>

      <React.Suspense fallback="Loading Componentsdf...">
        <CounterAppOne />
        <HocTest>
          <div>hello</div>
        </HocTest>

      </React.Suspense>
      </ErrorBoundary>
    <ErrorBoundary>

      <React.Suspense fallback="Loading">
        <CounterTwo />
      </React.Suspense>
    </ErrorBoundary>

      <React.Suspense fallback="style loaduing">
        <BasicCard />
      </React.Suspense>

      <ShellContainer/>
      </> */}
      {/* <ThemeProvider/> */}
    </>
  );
};
