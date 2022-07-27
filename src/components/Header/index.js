import React, {useState} from "react"
import {createPortal} from "react-dom";

import CalendarMenu from "../CalendarMenu";
import SideBar from "../SideBar";
import Button from "../Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from '@mui/icons-material/Menu';

import './style.scss'
import Layer from "../Layer";

function Header(props){
    const {
      isRegularPage,
      onClick,
    } = props;

    const [isOpen, setOpen] = useState(false);

    const onOpenSideBar = () => {
        setOpen(!isOpen);
    }

    return (
        <header className={'header'}>
            <div className={'header__menu-side-bar'}>
                <MenuIcon onClick={onOpenSideBar}/>
                {isOpen &&
                    <Layer onClick={onOpenSideBar}>
                        <SideBar onClick={onOpenSideBar}/>
                    </Layer>
                }
            </div>
            <div className={'header__menu'}>
                <CalendarMenu
                    isRegularPage={isRegularPage}
                />
                {
                    isRegularPage &&
                    <Button
                        label={<AddCircleOutlineIcon
                            sx={{
                                fontSize: 50
                            }}
                        />}
                        onClick={onClick}
                        className={'button_add-to-do'}
                    />
                }
            </div>
        </header>
    );
}

export default Header;