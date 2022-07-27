import React from 'react'

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
        onModify,
        isDisabled,
    } = props;

    const {
        errorMessages,
        form,
        onChange,
    } = useTaskEditForm({data});

    return (
        <ModalWindow
            onClose = {onClose}
            isDisabled={isDisabled}
        >
            <form className={'task-edit'} noValidate={true}>
                <Input
                    label={'Заголовок'}
                    value={form.heading}
                    name={'heading'}
                    className={!errorMessages.heading
                        ? 'input'
                        : 'input input_invalid'}
                    onChange={onChange}
                    errorMessage={errorMessages.heading}
                    isDisabled={isDisabled}
                />
                <TextArea
                    label={'Описание'}
                    value={form.description}
                    name={'description'}
                    className={!errorMessages.description
                        ? 'textarea'
                        : 'textarea textarea_invalid'}
                    onChange={onChange}
                    errorMessage={errorMessages.description}
                    isDisabled={isDisabled}
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
                        !data
                        ? !isDisabled &&
                            <Button
                            label={'Добавить'}
                            onClick={() => {onSubmit(form)}}
                            className={!(errorMessages.heading || errorMessages.description)
                            ? 'button_submit'
                            : 'button_submit button_disabled'}
                            disabled={(errorMessages.heading || errorMessages.description)}
                        />
                        : !isDisabled &&
                            <Button
                            label={'Изменить'}
                            onClick={() => {onModify(form, data)}}
                            className={!(errorMessages.heading || errorMessages.description)
                            ? 'button_submit'
                            : 'button_submit button_disabled'}
                            disabled={(errorMessages.heading || errorMessages.description)}
                        />
                    }
                </div>
            </form>
        </ModalWindow>
    )
}

export default TaskEdit;