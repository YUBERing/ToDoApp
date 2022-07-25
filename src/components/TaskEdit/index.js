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
        onModify
    } = props;

    const {
        isValidInput,
        errorMessages,
        form,
        ref,
        onChange,
        onEnterPress,
    } = useTaskEditForm({data});

    return (
        <ModalWindow
            onClose = {onClose}
        >
            <form className={'task-edit'}>
                <Input
                    label={'Заголовок'}
                    value={form.heading}
                    name={'heading'}
                    className={isValidInput.heading
                        ? 'input'
                        : 'input input_invalid'}
                    onChange={onChange}
                    onKeyPress={onEnterPress}
                    errorMessage={errorMessages.heading}
                />
                <TextArea
                    label={'Описание'}
                    value={form.description}
                    name={'description'}
                    className={isValidInput.description
                        ? 'textarea'
                        : 'textarea textarea_invalid'}
                    onChange={onChange}
                    onKeyPress={onEnterPress}
                    errorMessage={errorMessages.description}
                />
                <div className='task-edit__footer'>
                    <DateAssign
                        name={'date'}
                        label = {'Дата задачи'}
                        value = {form.date}
                        onChange = {onChange}
                    />
                    {
                        !data
                        ? <Button
                            label={'Добавить'}
                            onClick={() => {onSubmit(form)}}
                            className={(isValidInput.heading && isValidInput.description)
                                ? 'button button_submit'
                                : 'button button_submit button_disabled'}
                            disabled={!(isValidInput.heading && isValidInput.description)}
                            ref={ref}
                        />
                        : <Button
                            label={'Изменить'}
                            onClick={() => {onModify(form, data)}}
                            className={(isValidInput.heading && isValidInput.description)
                                ? 'button button_submit'
                                : 'button button_submit button_disabled'}
                            disabled={!(isValidInput.heading && isValidInput.description)}
                            ref={ref}
                        />
                    }
                </div>
            </form>
        </ModalWindow>
    )
}

export default TaskEdit;