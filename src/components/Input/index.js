import {React} from 'react';

import './style.scss';

function Input(props) {
    const {
        label,
        value,
        name,
        className,
        onChange,
    } = props;

    return (
        <div className={className}>
            {label}
            <input
            required
            type='text'
            value={value}
            onChange={(event) => {onChange(event.target.value, name)}}
            />
        </div>
    )
};

export default Input;