import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import ToDoLink from "./Link";

import {LINK_LIST} from "../../constants/links";

import './style.scss'

function SideBar(props) {
    const {
        onClick,
    } = props;

    const getLinksToPages = () => {
        return LINK_LIST.map((item) => {
            const {
                id,
                icon,
                label,
                link,
                page,
            } = item;

            return (
                <ToDoLink
                    key={id}
                    icon={icon}
                    label={label}
                    link={link}
                    page={page}
                />
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