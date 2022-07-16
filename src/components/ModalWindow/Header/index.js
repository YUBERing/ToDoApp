import {React} from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './style.scss';

function ModalWindowHeader(props) {
    const {
        headname,
        onClose
    } = props


    return (
        <div className='header'>
            <div>{headname}</div>
            <CloseIcon onClick={onClose}/>
        </div>
    )
}

export default ModalWindowHeader;