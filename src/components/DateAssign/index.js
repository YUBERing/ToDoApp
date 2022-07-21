import {forwardRef, React} from 'react'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './style.scss';
import Button from "../Button";

function DateAssign(props) {
    const {
        label,
        value,
        onChange
    } = props;

    const CustomInput = forwardRef(
        ({value, onClick}, ref) => (
          <input
            value={value}
            onClick={onClick}
            className={'custom-input'}
            ref={ref}
          />
        ));

    return (
        <div className='date-place'>
            {label}
            <DatePicker
                dateFormat='dd.MM.yyyy'
                selected={Date.parse(value)}
                onChange={(date) => {onChange(date, 'date')}}
                customInput={<CustomInput/>}
            />
        </div>
    )
};

export default DateAssign;