import {React} from 'react';

import {Routes, Route, useLocation} from "react-router-dom";
import Tasks from './components/Tasks/index';
import FavoriteTasks from "./components/FavoriteTasks";
import SideBar from "./components/SideBar";
import {PATHS_TO_PAGES} from "./constants/link";
import {Navigate} from "react-router";

function App() {
    const location = useLocation();

  return (
      <>
          {
              location.pathname === '/' || location.pathname === '/tasks'
              &&
              <Navigate to={'tasks/ALL'} replace={true}/>
          }
          {
              location.pathname === '/favorite'
              &&
              <Navigate to={'favorite/ALL'} replace={true}/>
          }
          <SideBar/>
          <Routes>
              <Route
                  path={`${PATHS_TO_PAGES.MAIN}/:type`}
                  element={<Tasks/>}
              />
              <Route
                  path={`${PATHS_TO_PAGES.FAVORITE}/:type`}
                  element={<FavoriteTasks/>}
              />
          </Routes>
      </>
  )
}

export default App;
