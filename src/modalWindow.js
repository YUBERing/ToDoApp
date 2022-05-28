import './App.css';
import { React, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PropTypes, { func } from 'prop-types';

function ModalWindow(props) {
    const {
        onClose,
        onSubmit,
        data,
        onModify
    } = props;

    const [form, setForm] = useState({heading: '', description: '', date: ''});

    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        if (!data) {
            return
        }

        const { index, ...form } = data;

        setForm(form);
    }, [])

    function onChange(value, name){
        setForm({...form, [name]: value});
    }

    return(
        <div className='modalBack'>
            <div className='modalFront'>
                <div className='header'>
                    <div>Задача</div>
                    <div onClick={onClose}>&times;</div>
                </div>
                <div>
                    <div className='headingPlace'>
                        <div>Заголовок</div>
                        <input 
                        type='text'
                        value={form.heading}
                        onChange={(event) => {onChange(event.target.value, 'heading')}}
                        />
                    </div>
                    <div className='discriptionPlace'>
                        <div>Описание</div>
                        <textarea
                        cols={60}
                        rows={12}
                        value={form.description}
                        onChange={(event) => {onChange(event.target.value, 'discription')}}
                        />
                    </div>
                    <div className='footer'>
                        <div className='datePlace'>
                            <div>Дата задачи</div>
                            <DatePicker 
                            selected={startDate} 
                            onChange={(event, date) => {setStartDate(date);
                            onChange(event.target.value, 'date');}}/>
                        </div>
                        {
                            !data
                            ? <div onClick={() => {onSubmit(form)}} className='submit'>Добавить</div>
                            : <div onClick={() => {onModify(form, data.index)}} className='submit'>Изменить</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ModalWindow;