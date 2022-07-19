import {React, useState} from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './style.scss';
import yellow from "@mui/material/colors/yellow";


function ItemToDoList(props) {
    const {
        item,
        onDeleteItem,
        onChangeItem,
        onChecked,
    } = props

    const date = new Date(Date.parse(item.date)).toLocaleDateString();

    const [open, setOpen] = useState(false);

    const onClickToReveal = () => {
        setOpen(!open);
    }

    return (
        <div className={'todoitem'}  key={item.id}>
            <div className='todotask'>
                <div className='headings' onClick={() => {onClickToReveal()}}>
                    <div className={open ? 'rotate' : undefined}><ArrowForwardIosIcon sx={{fontSize: 20}}/></div>
                    {item.heading}
                </div>
                <div className='date'>
                    {date}
                </div>
                <div className={'favorite'}>
                    {
                        item.chosen
                            ? <StarIcon sx={{color: yellow[500], fontSize: 30}} onClick={() => onChecked(item)}/>
                            : <StarBorderIcon sx={{color: yellow[800], fontSize: 30}} onClick={() => onChecked(item)}/>
                    }
                </div>
                <div className='buttons'>
                    <EditIcon sx={{fontSize: 30}} onClick={() => {onChangeItem(item)}}/>
                    <DeleteIcon sx={{fontSize: 30}} onClick={() => {onDeleteItem(item)}}/>
                </div>
            </div>
            <div className={open ? 'description open' : 'description'}>
                {item.description}
            </div>
        </div>
    )
}

export default ItemToDoList;