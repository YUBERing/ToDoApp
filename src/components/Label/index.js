import React from "react";

import './style.scss';

const Label = (props) => {
    const {
        content,
        actionKey,
    } = props;

    const getClassName = (key) => {
        switch(key) {
            case 'error-message':
                return ' label_error-message';
            default:
                return '';
        }
    }

    return (
        <div className={`label${getClassName(actionKey)}`}>
            {content}
        </div>
    );
};

export default Label;