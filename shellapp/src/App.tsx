import React from "react";
import "../src/style.css";
const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const HocTest = React.lazy(() => import("app1/Hoctest"));
const CounterTwo = React.lazy(() => import("authapp/Auth"));
const First = React.lazy(() => import("authapp/Auth"));
const Login = React.lazy(() => import("../src/component/Login"));
const Register = React.lazy(() => import("authapp/Register"));
const BasicCard = React.lazy(() => import("styleguide/BasicCard"));
// const Layout = React.lazy(() => import("styleguide/Layout"));
const Layout = React.lazy(() => import("../src/component/Layout/Layout"));
import { useCustomHook1, useCustomHook2 } from "services/customHooksSR";
import { client } from "services/apollo_SR";
import ShellContainer from "./component/ShellContainer";
import ErrorBoundary from "./component/ErrorBoundary";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./component/Landing";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import PrivateRoute from "services/ProtectedRoute";

export const App = () => {
  const signIn = useSignIn();
 
  return (
    <>
      {/* <RouterProvider router={router} /> */}
     
      <BrowserRouter>
        <Routes>
          {/* <Route path="/">
            <Route
              index={true}
              element={
                <React.Suspense fallback="Loading">
                  <Layout></Layout>
                </React.Suspense>
              }
            />
          </Route> */}
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
          {/* <Route
            element={
              <ErrorBoundary>
                <React.Suspense fallback="Loading">
                  <Layout />
                </React.Suspense>
              </ErrorBoundary>
            }
          >
            <Route path="/dashboard" element={<Landing />} />
            <Route path="/login-formular" element={<Login />} />
          </Route> */}
          {/* <Route element={<AuthOutlet fallbackPath="/login" />}>
            <Route path="/dashboard" element={<Landing />} />
          </Route> */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Landing />}></PrivateRoute>}
          ></Route>
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
