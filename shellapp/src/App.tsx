import React from "react";
import "../src/style.css";
const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const HocTest = React.lazy(() => import("app1/Hoctest"));

const CounterTwo = React.lazy(() => import("authapp/CounterTwo"));
// const CounterTwo = React.lazy(() => import("authapp/CounterTwo"));


const BasicCard = React.lazy(() => import("styleguide/BasicCard"));
// import theme from "styleguide/theme";
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
      {/* <RouterProvider router={router} /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index={true} element={<Landing />} />
          </Route>
          <Route
            path="/auth"
            element={
              <React.Suspense fallback="Loading">
              <CounterTwo/>
              </React.Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback="Loading">
                <Landing/>
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
{/* <React.Suspense fallback="Loading Componentsdf...">
<CounterTwo/>

      </React.Suspense> */}

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
    </>
  );
};
