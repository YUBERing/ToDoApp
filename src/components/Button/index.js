import {forwardRef, React} from 'react';

import './style.scss';

const Button = forwardRef((props, ref) => {
    const {
        label,
        onClick,
        className,
        disabled,
    } = props;

    return(
        <button
            className={`button ${className}`}
            onClick={onClick}
            ref={ref}
            disabled={disabled}
        >
            {label}
        </button>
    );
});

export default Button;