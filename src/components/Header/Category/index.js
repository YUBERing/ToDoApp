import {React} from 'react';

import './style.scss';

function TasksCategory(props) {
    const {
        label,
        type,
        selectTask,
    } = props;

    return (
        <div className='categories_point' key={type} onClick = {() => {selectTask(type)}}>
            {label}
        </div>
    )
}

export default TasksCategory;