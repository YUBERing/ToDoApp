import {React, useState} from 'react';

import ModalWindowHeader from './Header/index';

import './style.scss';
import Layer from "../Layer";

function ModalWindow(props) {
    const {
        name,
        onClose,
        children,
        isDisabled,
    } = props;

    return(
        <Layer onClick={onClose}>
            <div className='modal-window modal-window_open' onClick={e => e.stopPropagation()}>
                <ModalWindowHeader
                    isDisabled={!isDisabled}
                    headName = {
                        isDisabled
                        ? 'Просмотр'
                        : 'Задача'}
                    onClose = {onClose}
                />
                {children}
            </div>
        </Layer>
    );
}



export default ModalWindow;