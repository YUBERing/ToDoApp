import {useEffect, useState} from "react";

import {SIZE_LABEL} from "../../../constants/magicNumber";

import {nanoid} from "nanoid";

export const useTaskEditForm = ({data}) => {
    const [errorMessages, setErrorMessages] = useState({
        heading: '',
        description: '',
    });

    const [form, setForm] = useState({
        id: nanoid(),
        heading: '',
        description: '',
        date: new Date(),
        favorite: false});

    useEffect(() => {
        if (!data) {
            setErrorMessages({
                heading: 'Введите заголовок',
                description: 'Введите описание'
            });
            return
        }

        const { index, ...task } = data;

        setForm(task);
    }, []);

    useEffect(() => {
        console.log(errorMessages)
    }, [errorMessages])

    const validateForm = (name, value) => {
        switch (name) {
            case 'heading':
                if (!value) {
                    setErrorMessages({...errorMessages, [name]: 'Введите заголовок'});
                    console.log(1)
                    break;
                }

                if (value.length > SIZE_LABEL.SIZE_HEADING) {
                    setErrorMessages({...errorMessages, [name]: 'Превышен лимит в 100 символов'});
                    console.log(2)
                    break;
                }

                if (value.match('[^А-Яа-яЁё ]')) {
                    setErrorMessages({...errorMessages, [name]: 'Допустимые сиволы А-Я, а-я и пробел'});
                    console.log(3)
                    break;
                }
                console.log(0)
                setErrorMessages({...errorMessages, [name]: ''});
                break;
            case 'description':
                if (!value) {
                    setErrorMessages({...errorMessages, [name]: 'Введите описание'});
                    break;
                }

                if (value.length > SIZE_LABEL.SIZE_DESCRIPTION) {
                    setErrorMessages({...errorMessages, [name]: 'Превышен лимит в 1000 символов'});
                    break;
                }

                if (value.match('[^А-Яа-яЁё ?!:+()]')) {
                    setErrorMessages({...errorMessages, [name]: 'Допустимые сиволы А-Я, а-я, ?, !, :, + и ()'});
                    break;
                }

                setErrorMessages({...errorMessages, [name]: ''});
                break;
            default:
                break;
        }
    }

    function onChange(value, name){
        setForm({...form, [name]: value});
        validateForm(name, value);
    }

    return {
        errorMessages,
        form,
        onChange,
    }
}