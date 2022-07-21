import React from "react";

import TasksCategory from "./Category";
import SearchBar from "../SearchBar";

import {CATEGORY_LIST} from "../../constants/tasks";

import './style.scss'

function Header(props) {

    const {
        regularPage,
    } = props;

    const getCategories = () => {
        return CATEGORY_LIST.map((item, i) => {
            return (
                <TasksCategory
                    label={item.label}
                    className={'categories__point'}
                    type={item.type}
                    regularPage={regularPage}
                />
            );
        })
    }

    return (
        <header>
            <div className='categories'>
                {getCategories()}
            </div>
            <SearchBar regularPage={regularPage}/>
        </header>
    );
}

export default Header;