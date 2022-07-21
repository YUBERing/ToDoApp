import React from 'react'

import ModalWindow from '../ModalWindow';
import Input from '../Input';
import TextArea from '../TextArea';
import DateAssign from '../DateAssign';
import Button from '../Button';
import Label from "../Label";

import { useTaskEditForm } from './hooks/useForm';

import './style.scss';


function TaskEdit(props) {
    const {
        onClose,
        onSubmit,
        data,
        onModify
    } = props;

    const {
        form,
        onChange,
    } = useTaskEditForm({data});

    return (
        <ModalWindow
            onClose = {onClose}
        >
            <form>
                <Input
                    label = {<Label
                        content={'Заголовок'}
                    />}
                    value = {form.heading}
                    name={'heading'}
                    className={'task-edit__input'}
                    onChange = {onChange}
                />
                <TextArea
                    label = {<Label
                        content={'Описание'}
                    />}
                    value = {form.description}
                    name={'description'}
                    className={'task-edit__textarea'}
                    onChange = {onChange}
                />
                <div className='task-edit__footer'>
                    <DateAssign
                        label = {<Label
                            content={'Дата задачи'}
                        />}
                        value = {form.date}
                        onChange = {onChange}
                    />
                    {
                        !data
                        ? <Button
                            label = {'Добавить'}
                            onClick = {() => {onSubmit(form)}}
                            className = {'submit'}
                        />
                        : <Button
                            label = {'Изменить'}
                            onClick = {() => {onModify(form, data)}}
                            className = {'submit'}
                        />
                    }
                </div>
            </form>
        </ModalWindow>
    )
}

export default TaskEdit;