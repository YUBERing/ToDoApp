import {React} from 'react';

import {Routes, Route} from "react-router-dom";
import Tasks from './components/Tasks/index';
import FavoriteTasks from "./components/FavoriteTasks";
import SideBar from "./components/SideBar";

function App() {
  return (
      <>
          <SideBar/>
          <Routes>
              <Route
                  path='/'
                  element={<Tasks/>}
              />
              <Route
                  path='/favorite'
                  element={<FavoriteTasks/>}
              />
          </Routes>
      </>
  )
}

export default App;
