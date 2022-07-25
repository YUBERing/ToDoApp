import {React} from 'react';

import ModalWindowHeader from './Header/index';

import './style.scss';

function ModalWindow(props) {
    const {
        onClose,
        children,
    } = props;

    return(
        <div className='modal-window modal-window_open'>
            <div className='modal-window__workplace'>
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