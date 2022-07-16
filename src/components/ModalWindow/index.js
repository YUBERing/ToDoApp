import {React} from 'react';

import ModalWindowHeader from './Header/index';

import './style.scss';



function ModalWindow(props) {
    const {
        onClose,
        children
    } = props;

    return(
        <div className='modalBack'>
            <div className='modalFront'>
                <ModalWindowHeader
                    headname = {'Задача'}
                    onClose = {onClose}
                />
                {children}
            </div>
        </div>
    );
}



export default ModalWindow;