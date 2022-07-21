import React from "react";

import './style.scss';

const Label = (props) => {
    const {
        content,
        className,
    } = props;

    return (
        <div className={'label'}>
            {content}
        </div>
    );
};

export default Label;