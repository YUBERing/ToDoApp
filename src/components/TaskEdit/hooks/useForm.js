import { useEffect, useState } from "react";

export const useTaskEditForm = ({data}) => {
    const [form, setForm] = useState({heading: '', description: '', date: ''});

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