import React from 'react'

import ModalWindow from '../ModalWindow';
import Input from '../Input';
import TextArea from '../TextArea';
import DateAssign from '../DateAssign';

import { useTaskEditForm } from './hooks/useForm';

import './style.scss';

function TaskEdit(props) {
    const {
        onClose,
        data,
        isDisabled,
        isOpen,
        setData,
        setOpen,
    } = props;

    const {
        errorMessages,
        form,
        onChange,
        getButton,
    } = useTaskEditForm(data, isOpen, setOpen, setData, isDisabled);



    return (
        <ModalWindow
            onClose = {onClose}
            isDisabled={isDisabled}
        >
            <form className={'task-edit'} onSubmit={(e) => {e.preventDefault()}}>
                <Input
                    label={'Заголовок'}
                    value={form.heading}
                    name={'heading'}
                    actionKey={'input-form'}
                    onChange={onChange}
                    errorMessage={errorMessages.heading}
                    isDisabled={isDisabled}
                    color={'green'}
                />
                <TextArea
                    label={'Описание'}
                    value={form.description}
                    name={'description'}
                    actionKey={'textarea-form'}
                    onChange={onChange}
                    errorMessage={errorMessages.description}
                    isDisabled={isDisabled}
                    color={'green'}
                />
                <div className='task-edit__footer'>
                    <DateAssign
                        name={'date'}
                        label={'Дата задачи'}
                        value={form.date}
                        onChange={onChange}
                        isDisabled={isDisabled}
                    />
                    {
                        getButton()
                    }
                </div>
            </form>
        </ModalWindow>
    )
}

export default TaskEdit;