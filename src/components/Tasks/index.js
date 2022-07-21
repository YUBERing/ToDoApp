import React from 'react';

import ViewedTasks from "../ViewedTasks";
import CalendarMenu from "../CalendarMenu";

import './style.scss';
import 'react-calendar/dist/Calendar.css';
import {useTasksEditPage} from "../../hooks/usePage";


function Tasks() {
  const regularPage = true;

  useTasksEditPage({regularPage});

  return (
    <div className="tasks">
      <div className='tasks__to-do-list'>
        <CalendarMenu
          regularPage={regularPage}
        />
        <ViewedTasks regularPage={regularPage}/>
      </div>
    </div>
  );
}

export default Tasks;