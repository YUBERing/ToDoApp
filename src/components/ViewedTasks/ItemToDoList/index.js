import {React} from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import yellow from "@mui/material/colors/yellow";

import './style.scss';

function ViewedTasksItemToDoList(props) {
    const {
        item,
        onDeleteItem,
        onChangeItem,
        onCheck,
        style,
        onClick,
    } = props;

    const date = new Date(Date.parse(item.date)).toLocaleDateString();

    return (
        <div className={'viewed-tasks__item-to-do-list'}  key={item.id} style={style}>
            <div className='viewed-tasks__to-do-task'>
                <div className='viewed-tasks__headings' title={item.heading} onClick={() => onClick(item)}>
                    {item.heading}
                </div>
                <div className='viewed-tasks__date'>
                    {date}
                </div>
                <div className={'viewed-tasks__favorite'}>
                    {
                        item.favorite
                            ? <StarIcon sx={{color: yellow[500]}} onClick={() => onCheck(item)}/>
                            : <StarBorderIcon sx={{color: yellow[800]}} onClick={() => onCheck(item)}/>
                    }
                </div>
                <div className='viewed-tasks__buttons'>
                    <EditIcon onClick={() => {onChangeItem(item)}}/>
                    <DeleteIcon onClick={() => {onDeleteItem(item)}}/>
                </div>
            </div>
            <div className={'viewed-tasks__description'} title={item.description}>
                {item.description}
            </div>
        </div>
    )
}

export default ViewedTasksItemToDoList;