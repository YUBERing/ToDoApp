import {createRef, useEffect, useState} from "react";

import {nanoid} from "nanoid";

export const useTaskEditForm = ({data}) => {
    const [form, setForm] = useState({
        id: nanoid(),
        heading: '',
        description: '',
        date: new Date(),
        favorite: false});

    const [errorMessages, setErrorMessages] = useState({
        heading: '',
        description: '',
    });

    const [isValidInput, setValidInput] = useState({
        heading: false,
        description: false,
    });

    const ref = createRef();

    useEffect(() => {
        if (!data) {
            console.log('+++');
         return
        }

        console.log('+++');
        const { index, ...form } = data;

        setValidInput({
            heading: true,
            description: true,
        });

        setForm(form);
    }, []);

    const validateForm = (name, value) => {
        switch (name) {
            case 'heading':
                if (!value) {
                    setErrorMessages({...errorMessages, [name]: 'Введите заголовок'});
                    setValidInput({...isValidInput, [name]: false});
                    break;
                }

                if (value.length > 100) {
                    setErrorMessages({...errorMessages, [name]: 'Превышен лимит в 100 символов'});
                    setValidInput({...isValidInput, [name]: false});
                    break;
                }

                if (value.match('[^А-Яа-яЁё ]')) {
                    setErrorMessages({...errorMessages, [name]: 'Допустимые сиволы А-Я, а-я и пробел'});
                    setValidInput({...isValidInput, [name]: false});
                    break;
                }

                setErrorMessages({...errorMessages, [name]: ''});
                setValidInput({...isValidInput, [name]: true});

                break;
            case 'description':
                if (!value) {
                    setErrorMessages({...errorMessages, [name]: 'Введите описание'});
                    setValidInput({...isValidInput, [name]: false});
                    break;
                }

                if (value.length > 1000) {
                    setErrorMessages({...errorMessages, [name]: 'Превышен лимит в 1000 символов'});
                    setValidInput({...isValidInput, [name]: false});
                    break;
                }

                if (value.match('[^А-Яа-яЁё ?!:+()]')) {
                    setErrorMessages({...errorMessages, [name]: 'Допустимые сиволы А-Я, а-я, ?, !, :, + и ()'});
                    setValidInput({...isValidInput, [name]: false});
                    break;
                }

                setErrorMessages({...errorMessages, [name]: ''});
                setValidInput({...isValidInput, [name]: true});
                break;
            default:
                break;
        }
    }

    function onChange(value, name){
        setForm({...form, [name]: value});
        validateForm(name, value);
    }

    function onEnterPress(e) {
        if (e.keyCode === 13) {
            ref.current.click();
        }
    }

    return {
        isValidInput,
        ref,
        errorMessages,
        form,
        onChange,
        onEnterPress,
    }
}