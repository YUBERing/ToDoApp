import {forwardRef, React} from 'react'

import DatePicker from 'react-datepicker'
import Label from "../Label";

import 'react-datepicker/dist/react-datepicker.css'
import './style.scss';

function DateAssign(props) {
    const {
        name,
        label,
        value,
        onChange,
        isDisabled,
    } = props;

    const CustomInput = forwardRef(
        ({value, onClick}, ref) => (
          <div
            onClick={
                !isDisabled
                ? onClick
                : undefined
            }
            className={`custom-input ${
                isDisabled
                ? 'custom-input_viewing-mod'
                : ''
            }` }
            ref={ref}
          >
              {value}
          </div>
        ));

    return (
        <div className='date-assign'>
            <Label
                content={label}
            />
            <DatePicker
                dateFormat='dd.MM.yyyy'
                selected={Date.parse(value)}
                onChange={(date) => {onChange(date, name)}}
                customInput={<CustomInput/>}
                minDate={new Date()}
            />
        </div>
    );
}

export default DateAssign;