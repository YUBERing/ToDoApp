import React from "react";
import {NavLink} from "react-router-dom";
import {LINK_LIST} from "../../constants/link";

import MenuIcon from '@mui/icons-material/Menu';


import './style.scss'

function SideBar() {

    const getLinksToPages = () => {
        return LINK_LIST.map((item) => {
            return (
                <NavLink to={item.link} className={({isActive}) => isActive ? 'link active' : 'link'}>{item.icon}{item.label}</NavLink>
            )
        })
    }

    return (
        <div className={'side_panel'}>
            <div className={'side_panel__button'}> <MenuIcon/> </div>
            <div className='side_bar'>
                <div>ToDoAPP</div>
                <div className={'navigation'}>
                    {getLinksToPages()}
                </div>
            </div>
        </div>
    )
}

export default SideBar;