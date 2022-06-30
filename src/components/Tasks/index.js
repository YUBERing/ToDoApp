import Calendar from 'react-calendar';
import { React, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import ModalWindow from '../ModalWindow/index';
import Category from './Category/index';
import Button from '../Button';
import TaskEdit from '../TaskEdit';
import ItemToDoList from './ItemToDoList';
import { updateToDoList } from '../../store/actionCreators/todos';

import './style.scss';

function Tasks() {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());

  const [isOpen, setOpen] = useState(false);

  const [data, setData] = useState(null);

  const category = ['Все', 'Вчера', 'Сегодня', 'За месяц']

  const selectionTask = (index) => {
    const toDoList = JSON.parse(localStorage.todoArr);

    const nowDay = new Date();

    switch(index) {
      case 0:
        dispatch(updateToDoList(toDoList));
        break;
      case 1:
        const yesterday = new Date(nowDay.setDate(nowDay.getDate() - 1)).toLocaleDateString();

        const yesterdayTasks = toDoList.filter(
          item => new Date(Date.parse(item.date)).toLocaleDateString() === yesterday
        )

        dispatch(updateToDoList(yesterdayTasks));
        break;
      case 2:
        const nowDayTasks = toDoList.filter(
          item => new Date(Date.parse(item.date)).toLocaleDateString() === nowDay.toLocaleDateString()
        )
        
        dispatch(updateToDoList(nowDayTasks));
        break;
      case 3:
        const nowMonth = new Date().getMonth();

        const nowYear = new Date().getFullYear();

        const nowMonthTasks = toDoList.filter(
          item => new Date(Date.parse(item.date)).getMonth() === nowMonth && new Date(Date.parse(item.date)).getFullYear() === nowYear
        )
        dispatch(updateToDoList(nowMonthTasks));
        break;
    }
  }

  function onClick() {
    setOpen(!isOpen);
    setData(null);
  }

  function onSubmit(form) {
    const todoList = [...JSON.parse(localStorage.todoArr), form];
    
    setOpen(!isOpen);
    todoList.sort((firstItem, secondItem) => {
      const a = new Date(Date.parse(firstItem.date))
      
      const b = new Date(Date.parse(secondItem.date))
      
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    localStorage.todoArr = JSON.stringify(todoList)
    dispatch(updateToDoList(JSON.parse(localStorage.todoArr)));
  }

  const onDeleteCard = (index) => {
    const toDoList = JSON.parse(localStorage.todoArr);

    toDoList.splice(index, 1);
    localStorage.todoArr = JSON.stringify(toDoList);
    dispatch(updateToDoList(JSON.parse(localStorage.todoArr)));
  }

  const onChangeCard = (item, index) => {
    setOpen(!isOpen);
    setData({ ...item, index });
  }

  const onModifyCard = (form, index) => {
    const toDoList = JSON.parse(localStorage.todoArr);

    toDoList[index] = form;
    toDoList.sort((firstItem, secondItem) => {
      const a = new Date(Date.parse(firstItem.date))
      
      const b = new Date(Date.parse(secondItem.date))
      
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    localStorage.todoArr = JSON.stringify(toDoList);
    dispatch(updateToDoList(JSON.parse(localStorage.todoArr)));
    setOpen(!isOpen);
    setData(null);
  }

  const getToDoList = () => {
    return todos.todos.map((item, i) => {
      return (
        <ItemToDoList
          item={item}
          i={i}
          onDeleteItem={onDeleteCard}
          onChangeItem={onChangeCard}
        />
      )
    })
  }

  const getCategory = () => {
    return category.map((item, i) => {
      return (
        <Category
          label={item}
          index={i}
          func={selectionTask}
        />
      );
    })
  }

  const onClickDay = (value) => {
    const toDoList = JSON.parse(localStorage.todoArr);

    const DayTasks = toDoList.filter(
      item => new Date(Date.parse(item.date)).toLocaleDateString() === value.toLocaleDateString()
    )
    
    dispatch(updateToDoList(DayTasks));
  }

  const tileDayThisTask = ({activeStartDate, date, view}) =>  
  {
    console.log(activeStartDate, date, view);
    return 'calendar__day'
  }

  return (
    <div className="App">
      <div className='calendar'>
        <Calendar
          onChange={onChange}
          onClickDay={onClickDay}
          tileClassName={tileDayThisTask}
          value={value}
        />
      </div>
      <div className='toDoList'>
        <div className='categories'>
          {getCategory()}
        </div>
        <div className='viewedToDoList'>
          {getToDoList()}
        </div>
        <div className='place__addToDo'>
          <Button
            label={'Добавить'}
            onClick={onClick}
            className={'addToDo'}
          />
          {
            isOpen &&
            <TaskEdit
              onClose={onClick}
              onSubmit={onSubmit}
              data={data}
              onModify={onModifyCard}
            />
          }
        </div>
      </div>
    </div>
  );
}

ModalWindow.PropTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  data: PropTypes.object,
  onModify: PropTypes.func
}

Category.PropTypes = {
  label: PropTypes.string
}

Button.PropTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Tasks;