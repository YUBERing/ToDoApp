import React, {useRef, useState} from "react"

import CalendarMenu from "../CalendarMenu";
import SideBar from "../SideBar";
import Button from "../Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from '@mui/icons-material/Menu'
import HelpIcon from '@mui/icons-material/Help';

import './style.scss'
import Layer from "../Layer";
import Tooltip from "../Tooltip";

function Header(props){
    const {
      isRegularPage,
      onClick,
    } = props;

    const [isOpen, setOpen] = useState(false);

    const [isOpenHelp, setOpenHelp] = useState(false);

    const tooltipRef = useRef(null);

    const onOpenHelp = () => {
        setOpenHelp(!isOpenHelp);
    }

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
                <div className={'header__left-menu'}>
                    <CalendarMenu
                        isRegularPage={isRegularPage}
                    />
                    <div className={'header__help'} ref={tooltipRef}>
                        <HelpIcon
                            onClick={onOpenHelp}
                            className={'header__help-icon'}
                        />
                        {
                            isOpenHelp &&
                            <Tooltip
                                trigger={onOpenHelp}
                                content={'Красный - сегодняшний день.\n' +
                                'Серый - дни с прсроченными заданиями.\n' +
                                'Зеленый - дни с активными заданиями.\n' +
                                'Синий - выбранный день.'}
                                tooltipRef={tooltipRef}
                            />
                        }
                    </div>
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
                        actionKey={'add-to-do'}
                    />
                }
            </div>
        </header>
    );
}

export default Header;