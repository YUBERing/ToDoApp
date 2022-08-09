import React from "react";
import {createPortal} from "react-dom";

import "./style.scss"

function Layer(props) {
    const {
        children,
        onClick,
    } = props;

    return createPortal(
        <div className={'layer'} onClick={onClick}>
            {children}
        </div>,
        document.body
    );
}

export default Layer;