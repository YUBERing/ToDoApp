import {React} from 'react';

import Label from "../Label";

import './style.scss';

function TextArea(props){
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
            <textarea
                name={name}
                value={value}
                onChange={(event) => {onChange(event.target.value, name)}}
                onKeyDown={onKeyPress}
            />
            <Label
                content={errorMessage}
                className={'error-message'}
            />
        </div>
    )
}

export default TextArea;