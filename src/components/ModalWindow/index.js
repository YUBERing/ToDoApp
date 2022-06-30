import {React} from 'react';

import Header from '../Header/index';

import './style.scss';



function ModalWindow(props) {
    const {
        onClose,
        children
    } = props;

    return(
        <div className='modalBack'>
            <div className='modalFront'>
                <Header
                    headname = {'Задача'}
                    onClose = {onClose}
                />
                {children}
            </div>
        </div>
    );
}



export default ModalWindow;