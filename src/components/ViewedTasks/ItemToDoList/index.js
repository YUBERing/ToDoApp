import {React, useState} from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './style.scss';
import yellow from "@mui/material/colors/yellow";


function ViewedTasksItemToDoList(props) {
    const {
        item,
        className,
        onDeleteItem,
        onChangeItem,
        onCheck,
    } = props

    const date = new Date(Date.parse(item.date)).toLocaleDateString();

    const [open, setOpen] = useState(false);

    const onClickToReveal = () => {
        setOpen(!open);
    }

    return (
        <div className={className}  key={item.id}>
            <div className='to-do-task'>
                <div className='headings' onClick={() => {onClickToReveal()}}>
                    <div className={open ? 'headings__arrow headings__arrow_open' : 'headings__arrow'}><ArrowForwardIosIcon sx={{fontSize: 20}}/></div>
                    {item.heading}
                </div>
                <div className='date'>
                    {date}
                </div>
                <div className={'favorite'}>
                    {
                        item.favorite
                            ? <StarIcon sx={{color: yellow[500]}} onClick={() => onCheck(item)}/>
                            : <StarBorderIcon sx={{color: yellow[800]}} onClick={() => onCheck(item)}/>
                    }
                </div>
                <div className='buttons'>
                    <EditIcon onClick={() => {onChangeItem(item)}}/>
                    <DeleteIcon onClick={() => {onDeleteItem(item)}}/>
                </div>
            </div>
            <div className={open ? 'description description_open' : 'description'}>
                {item.description}
            </div>
        </div>
    )
}

export default ViewedTasksItemToDoList;