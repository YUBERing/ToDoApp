import React from "react";
import {NavLink, useLocation} from "react-router-dom";

import './style.scss'

function ToDoLink(props) {
    const {
        icon,
        label,
        link,
        page,
    } = props;

    const location = useLocation();

    const getClassName = () => {
        const arrPath = location.pathname.split('/');

        if (arrPath.includes(page)) {
            return 'link link_active'
        }

        return 'link'
    }

    return (
        <NavLink
            to={link}
            className={
                getClassName()
            }
        >
            {icon}{label}
        </NavLink>
    );
}

export default ToDoLink;