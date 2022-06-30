import {React} from 'react';

import './style.scss';

function Input(props) {
    const {
        label,
        value,
        onChange
    } = props;

    return (
        <div className='headingPlace'>
            <div>{label}</div>
            <input
            required
            type='text'
            value={value}
            onChange={(event) => {onChange(event.target.value, 'heading')}}
            />
        </div>
    )
};

export default Input;