import {React} from 'react'

import ModalWindow from '../ModalWindow';
import Input from '../Input';
import TextArea from '../TextArea';
import DateAssign from '../DateAssign';
import Button from '../Button';

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
                    label = {'Заголовок'}
                    value = {form.heading}
                    onChange = {onChange}
                />
                <TextArea
                    label = {'Описание'}
                    value = {form.description}
                    onChange = {onChange}
                />
                <div className='footer'>
                    <DateAssign
                        label = {'Дата задачи'}
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