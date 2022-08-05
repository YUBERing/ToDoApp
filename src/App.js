import {React} from 'react';

import {Routes, Route, useLocation} from "react-router-dom";
import Tasks from './components/Tasks/index';
import FavoriteTasks from "./components/FavoriteTasks";
import SideBar from "./components/SideBar";
import {LINK_FAVORITE, LINK_TASKS} from "./constants/links";
import {Navigate} from "react-router";
import {CATEGORY_TYPE} from "./constants/tasks";

function App() {
    const location = useLocation();

  return (
      <>
          <SideBar/>
          <Routes>
              <Route
                  exact
                  path={'/'}
                  element={
                      <Navigate
                      to={LINK_TASKS.replace(':type', CATEGORY_TYPE.ALL)}
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
