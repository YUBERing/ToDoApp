import React from "react";

import {NavLink} from "react-router-dom";

import {LINK_LIST} from "../../constants/link";

import './style.scss'

function SideBar() {

    const getLinksToPages = () => {
        return LINK_LIST.map((item) => {
            return (
                <NavLink
                    key={item.id}
                    to={item.link}
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
        <div className='side-bar side-bar_size-s'>
            <div>ToDoAPP</div>
            <div className={'side-bar__navigation'}>
                {getLinksToPages()}
            </div>
        </div>
    );
}

export default SideBar;