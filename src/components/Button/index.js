import {React} from 'react';

import './style.scss';

function Button(props) {
    const {
        label,
        onClick,
        className,
        ref,
    } = props;

    return(
        <button className={className} onClick={onClick} ref={ref}>
            {label}
        </button>
    )
}

export default Button;