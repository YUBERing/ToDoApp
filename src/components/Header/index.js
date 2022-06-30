import {React} from 'react';

import './style.scss';

function Header(props) {
    const {
        headname,
        onClose
    } = props


    return (
        <div className='header'>
            <div>{headname}</div>
            <div onClick={onClose}>&times;</div>
        </div>
    )
}

export default Header;