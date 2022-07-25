import {React} from 'react';

import Label from "../Label";

import './style.scss';

function Input(props) {
    const {
        label,
        value,
        name,
        className,
        onChange,
        onKeyPress,
        errorMessage,
    } = props;

    return (
        <div className={className}>
            <Label
                content={label}
                className={'label'}
            />
            <input
                name={name}
                type='text'
                value={value}
                onChange={(event) => {onChange(event.target.value, name)}}
                onKeyPress={onKeyPress}
            />
            <Label
                content={errorMessage}
                className={'error-message'}
            />
        </div>
    );
}

export default Input;