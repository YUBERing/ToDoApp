import React from 'react';

import ViewedTasks from "../ViewedTasks";
import Header from "../Header";

import {useTasksEditPage} from "../../hooks/usePage";

import {history} from "../../store/store";

import './style.scss';
import 'react-calendar/dist/Calendar.css';

function Tasks() {
  const isRegularPage = true;

  const {
      isOpen,
      setOpen,
      data,
      setData,
      isViewing,
      setViewing,
      onClick,
  } = useTasksEditPage(isRegularPage);

  history.push('/ALL');

  return (
    <div className="tasks">
      <div className='tasks__to-do-list'>
        <Header
            isRegularPage={isRegularPage}
            onClick={onClick}
        />
        <ViewedTasks
            isRegularPage={isRegularPage}
            data={data}
            setData={setData}
            isOpen={isOpen}
            setOpen={setOpen}
            onClick={onClick}
            isViewing={isViewing}
            setViewing={setViewing}
        />
      </div>
    </div>
  );
}

export default Tasks;