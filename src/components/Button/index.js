import {forwardRef, React} from 'react';

import './style.scss';

const Button = forwardRef((props, ref) => {
    const {
        label,
        onClick,
        isPagination,
        actionKey,
    } = props;

    function getClassName(key) {
        switch(key){
            case 'submit':
                return 'button_submit';
            case 'add-to-do':
                return 'button_add-to-do';
            case 'pagination':
                if (isPagination) {
                    return 'button_pagination';
                }

                return 'button_pagination button_active';
            default:
                return '';
        }
    }

    return(
        <button
            className={`button ${getClassName(actionKey)}`}
            onClick={onClick}
            ref={ref}
        >
            {label}
        </button>
    );
});

export default Button;