import {React} from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './style.scss';

function ModalWindowHeader(props) {
    const {
        isDisabled,
        onClose,
    } = props

    function getHeadName() {
        if (isDisabled) {
            return 'Просмотр'
        }

        return 'Задача'
    }

    return (
        <div className={'modal-window__header'}>
            <div>{getHeadName()}</div>
            <CloseIcon onClick={onClose}/>
        </div>
    )
}

export default ModalWindowHeader;