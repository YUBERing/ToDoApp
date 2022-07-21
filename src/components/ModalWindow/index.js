import {React} from 'react';

import ModalWindowHeader from './Header/index';

import './style.scss';

function ModalWindow(props) {
    const {
        onClose,
        children
    } = props;

    return(
        <div className='modal-window modal-window_back'>
            <div className='modal-window modal-window_front'>
                <ModalWindowHeader
                    headName = {'Задача'}
                    onClose = {onClose}
                    className={'modal-window__header'}
                />
                {children}
            </div>
        </div>
    );
}



export default ModalWindow;