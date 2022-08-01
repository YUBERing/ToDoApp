import {React} from 'react';

import Label from "../Label";

import './style.scss';

function TextArea(props){
    const {
        label,
        value,
        name,
        onChange,
        onKeyPress,
        errorMessage,
        isDisabled,
        actionKey,
    } = props;

    const getClassName = (key) => {
        switch(key) {
            case 'textarea-form':
                if (!errorMessage) {
                    return ' textarea_form';
                }

                return ' textarea_form textarea_invalid';
            default:
                return '';
        }
    }

    return (
        <div className={`textarea${getClassName(actionKey)}`}>
            <Label
                content={label}
            />
            <textarea
                name={name}
                value={value}
                onChange={(event) => {onChange(event.target.value, name)}}
                onKeyDown={onKeyPress}
                disabled={isDisabled}
            />
            <Label
                content={errorMessage}
                actionKey={'error-message'}
            />
        </div>
    )
}

export default TextArea;