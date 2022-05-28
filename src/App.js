import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar'
import {React, useState} from 'react'
import 'react-calendar/dist/Calendar.css'
import ModalWindow from './modalWindow';
import PropTypes from 'prop-types';

function App() {
  const [value, onChange] = useState(new Date());

  const [list, setList] = useState([]);

  const [isOpen, setOpen] = useState(false);

  const [data, setData] = useState(null);

  function onClick() {
    setOpen(!isOpen);
    setData(null);
  }

  function onSubmit(form) {
    setOpen(!isOpen);
    setList([...list, form]);
  }

  const onModifyCard = (form, index) => {
    const copyList = [...list];

    copyList[index] = form;
    setList(copyList);
    setOpen(!isOpen);
    setData(null);
  }

  return (
    <div className="App">
      <div className='calendar'>
        <Calendar 
          onChange={onChange} 
          value={value} 
        />
      </div>
      <div className='toDoList'>
        <div className='categories'>
          <div className='categories_point'>
            Все
          </div>
          <div className='categories_point'>
            Вчера
          </div>
          <div className='categories_point'>
            Сегодня
          </div>
          <div className='categories_point'>
            За месяц
          </div>
        </div>
        <div className='viewedToDoList'>

        </div>
        <div className='place__addToDo'>
          <div className='addToDo' onClick={onClick}>
            Добавить
          </div>
          {
            isOpen &&
            <ModalWindow
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

export default App;
