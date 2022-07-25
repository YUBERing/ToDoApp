import React from "react"

import CalendarMenu from "../CalendarMenu";
import SideBar from "../SideBar";
import Button from "../Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from '@mui/icons-material/Menu';

import './style.scss'


function Header(props){
    const {
      isRegularPage,
      onClick,
    } = props;

    return (
        <header className={'header'}>
            <div className={'header__menu'}>
                <div className={'header__menu-side-bar'}>
                    <MenuIcon/>
                    <SideBar/>
                </div>
                <CalendarMenu
                    isRegularPage={isRegularPage}
                />
            </div>
            {
                isRegularPage &&
                <Button
                    label={<AddCircleOutlineIcon
                        sx={{
                            fontSize: 50
                        }}
                    />}
                    onClick={onClick}
                    className={'button button_add-to-do'}
                />
            }
        </header>
    );
}

export default Header;