import React from "react";

import ViewedTasks from "../ViewedTasks";
import CalendarMenu from "../CalendarMenu";

import './style.scss'
import {useTasksEditPage} from "../../hooks/usePage";

function FavoriteTasks() {
    const regularPage = false;

    useTasksEditPage({regularPage});

    return (
        <div className="favorite-tasks">
            <div className='favorite-tasks__to-do-list'>
                <CalendarMenu
                    regularPage={regularPage}
                />
                <ViewedTasks regularPage={regularPage}/>
            </div>
        </div>
    );
};

export default FavoriteTasks;