import {React} from 'react';

import {Routes, Route} from "react-router-dom";
import {Navigate} from "react-router";
import Tasks from './components/Tasks/index';
import FavoriteTasks from "./components/FavoriteTasks";
import SideBar from "./components/SideBar";

import {LINK_FAVORITE, LINK_START_TASKS, LINK_TASKS} from "./constants/links";

function App() {
  return (
      <>
          <SideBar/>
          <Routes>
              <Route
                  exact
                  path={'/'}
                  element={
                      <Navigate
                        to={LINK_START_TASKS}
                        replace={true}
                      />
                  }
              />
              <Route
                  path={LINK_TASKS}
                  element={<Tasks/>}
              />
              <Route
                  path={LINK_FAVORITE}
                  element={<FavoriteTasks/>}
              />
          </Routes>
      </>
  )
}

export default App;