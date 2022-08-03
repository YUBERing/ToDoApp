import React from "react";

import {NavLink} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

import {LINK_LIST} from "../../constants/link";

import './style.scss'

function SideBar(props) {
    const {
        onClick,
    } = props;

    const getLinksToPages = () => {
        return LINK_LIST.map((item) => {
            return (
                <NavLink
                    key={item.id}
                    to={`${item.link}`}
                    className={
                        ({isActive}) =>
                        isActive
                            ? 'link link_active'
                            : 'link'
                    }
                >
                    {item.icon}{item.label}
                </NavLink>
            );
        });
    }

    return (
        <div
            className='side-bar'
            onClick={(e) => e.stopPropagation()}
        >
            <div>ToDoAPP <CloseIcon onClick={onClick}/></div>
            <div className={'side-bar__navigation'}>
                {getLinksToPages()}
            </div>
        </div>
    );
}

export default SideBar;