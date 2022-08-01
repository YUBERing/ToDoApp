import {React} from 'react';

import {Routes, Route} from "react-router-dom";
import Tasks from './components/Tasks/index';
import FavoriteTasks from "./components/FavoriteTasks";
import SideBar from "./components/SideBar";
import {PATHS_TO_PAGES} from "./constants/link";

function App() {
  return (
      <>
          <SideBar/>
          <Routes>
              <Route
                  path={PATHS_TO_PAGES.MAIN}
                  element={<Tasks/>}
              />
              <Route
                  path={PATHS_TO_PAGES.FAVORITE}
                  element={<FavoriteTasks/>}
              />
          </Routes>
      </>
  )
}

export default App;
