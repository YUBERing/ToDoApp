import { useEffect, useState } from "react";
import {nanoid} from "nanoid";

export const useTaskEditForm = ({data}) => {
    const [form, setForm] = useState({id: nanoid(),heading: '', description: '', date: '', chosen: false});

    useEffect(() => {
        if (!data) {
         return
        }

        const { index, ...form } = data;

        setForm(form);
    }, [])
    
    function onChange(value, name){
        setForm({...form, [name]: value});
    }

    return {
        form,
        onChange
    }
}