import {React} from 'react';

import Label from "../Label";

import './style.scss';

function Input(props) {
    const {
        icon,
        label,
        value,
        name,
        actionKey,
        onChange,
        onKeyPress,
        errorMessage,
        isDisabled,
        color,
    } = props;

    const getColor = () => {
        switch(color) {
            case 'transparent':
                return '_transparent';
            case 'green':
                return '_green';
            default:
                return '_transparent';
        }
    }

    const getClassName = (key) => {
        switch(key) {
            case 'search-bar':
                return '_search-bar'
            case 'input-form':
                if (!errorMessage) {
                    return '_form';
                }

                return '_form input_invalid';
            default:
                return '';
        }
    }

    return (
        <div className={`input input${getClassName(actionKey)}`}>
            {icon}
            {
                label &&
                <Label
                    content={label}
                />
            }
            <input
                name={name}
                type='text'
                value={value}
                onChange={(event) => {onChange(event.target.value, name)}}
                onKeyPress={onKeyPress}
                disabled={isDisabled}
                className={`input__character-place input__character-place${getColor()}`}
            />
            {
                errorMessage &&
                <Label
                    content={errorMessage}
                    actionKey={'error-message'}
                />
            }
        </div>
    );
}

export default Input;