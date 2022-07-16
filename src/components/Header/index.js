import React from "react";

import TasksCategory from "./Category";

import {CATEGORY_LIST} from "../../constants/tasks";

import './style.scss'
import SearchBar from "../SearchBar";

function Header(props) {

    const {
        funcSelectTask,
        regularPage,
    } = props;

    const getCategory = () => {
        return CATEGORY_LIST.map((item, i) => {
            return (
                <TasksCategory
                    label={item.label}
                    type={item.type}
                    selectTask={funcSelectTask}
                />
            );
        })
    }

    return (
        <>
            <header>
                <div className='categories'>
                    {getCategory()}
                </div>
                <SearchBar regularPage={regularPage}/>
            </header>
        </>

    )
}

export default Header;