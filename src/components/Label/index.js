import React from "react";

import './style.scss';

const Label = (props) => {
    const {
        content,
        className,
    } = props;

    return (
        <div className={className}>
            {content}
        </div>
    );
};

export default Label;