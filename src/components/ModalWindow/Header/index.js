import {React} from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './style.scss';

function ModalWindowHeader(props) {
    const {
        headName,
        onClose,
        className,
    } = props

    return (
        <div className={className}>
            <div>{headName}</div>
            <CloseIcon onClick={onClose}/>
        </div>
    )
}

export default ModalWindowHeader;