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
            case 'textarea-form':
                if (!errorMessage) {
                    return '_form';
                }

                return '_form textarea_invalid';
            default:
                return '';
        }
    }

    return (
        <div className={`textarea textarea${getClassName(actionKey)}`}>
            {
                label &&
                <Label
                    content={label}
                />
            }
            <textarea
                name={name}
                value={value}
                onChange={(event) => {onChange(event.target.value, name)}}
                onKeyDown={onKeyPress}
                disabled={isDisabled}
                className={`textarea__character-place textarea__character-place${getColor()}`}
            />
            {
                errorMessage &&
                <Label
                    content={errorMessage}
                    actionKey={'error-message'}
                />
            }
        </div>
    )
}

export default TextArea;