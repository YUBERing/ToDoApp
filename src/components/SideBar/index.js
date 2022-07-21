import React from "react";
import {NavLink} from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';

import {LINK_LIST} from "../../constants/link";

import './style.scss'

function SideBar() {

    const getLinksToPages = () => {
        return LINK_LIST.map((item) => {
            return (
                <NavLink to={item.link} className={({isActive}) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}>{item.icon}{item.label}</NavLink>
            )
        })
    }

    return (
        <div className={'side-bar'}>
            <div className={'side-bar__button'}>
                <MenuIcon/>
            </div>
            <div className='side-bar__menu'>
                <div>ToDoAPP</div>
                <div className={'navigation'}>
                    {getLinksToPages()}
                </div>
            </div>
        </div>
    )
}

export default SideBar;