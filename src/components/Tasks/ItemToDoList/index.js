import {React} from 'react';

import Button from '../../Button';

import './style.scss';

function ItemToDoList(props) {
    const {
        item,
        i,
        onDeleteItem,
        onChangeItem,
    } = props;

    const date = new Date(Date.parse(item.date)).toLocaleDateString();

    return (
        <div className='todoitem' key={i}>
            <div className='todotask'>
                <div className='headings'>
                    {item.heading}
                </div>
                <div className='description'>
                    {item.description}
                </div>
            </div>
            <div className='buttons'>
                <div className='date'>
                    {date}
                </div>
                <Button
                    label = {'Изменить'}
                    onClick = {() => {onChangeItem(item, i)}}
                    className = {'submit'}  
                />
                <Button
                    label = {'Удалить'}
                    onClick = {() => {onDeleteItem(i)}}
                    className = {'submit'}
                />
            </div>
        </div>
    )
}

export default ItemToDoList;