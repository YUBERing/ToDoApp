import React from "react";

import "./style.scss"
import {createPortal} from "react-dom";

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