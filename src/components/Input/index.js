import {React} from 'react';

import Label from "../Label";

import './style.scss';

function Input(props) {
    const {
        label,
        value,
        name,
        actionKey,
        onChange,
        onKeyPress,
        errorMessage,
        isDisabled,
    } = props;

    const getClassName = (key) => {
        switch(key) {
            case 'search-bar':
                return ' input_search-bar'
            case 'input-form':
                if (!errorMessage) {
                    return ' input_form';
                }

                return ' input_form input_invalid';
            default:
                return '';
        }
    }

    return (
        <div className={`input${getClassName(actionKey)}`}>
            <Label
                content={label}
            />
            <input
                name={name}
                type='text'
                value={value}
                onChange={(event) => {onChange(event.target.value, name)}}
                onKeyPress={onKeyPress}
                disabled={isDisabled}
            />
            <Label
                content={errorMessage}
                actionKey={'error-message'}
            />
        </div>
    );
}

export default Input;