import React from "react";

import ViewedTasks from "../ViewedTasks";
import Header from "../Header";

import {useTasksEditPage} from "../../hooks/usePage";

import './style.scss'

function FavoriteTasks() {
    const isRegularPage = false;

    const {
        isOpen,
        setOpen,
        data,
        setData,
        isViewing,
        setViewing,
        onClick,
    } = useTasksEditPage(isRegularPage);

    return (
        <div className="favorite-tasks">
            <div className='favorite-tasks__to-do-list'>
                <Header
                    isRegularPage={isRegularPage}
                    onClick={onClick}
                />
                <ViewedTasks
                    isRegularPage={isRegularPage}
                    data={data}
                    setData={setData}
                    isOpen={isOpen}
                    setOpen={setOpen}
                    onClick={onClick}
                    isViewing={isViewing}
                    setViewing={setViewing}
                />
            </div>
        </div>
    );
}

export default FavoriteTasks;