import { BrowserRouter, Route, Routes } from "react-router-dom"

const RoutesComponent = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} />
          <Route path={'/login' } />
          {/* <Route path={'/secure'} element={
            <RequireAuth fallbackPath={'/login'}>
              <SecureComponent/>
            </RequireAuth>
          }/> */}
        </Routes>
      </BrowserRouter>
    )
   }

export default RoutesComponent