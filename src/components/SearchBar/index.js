import React, {useDeferredValue, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateToDoList} from "../../store/actionCreators/todos";
import SearchIcon from '@mui/icons-material/Search';
import './style.scss'
import grey from "@mui/material/colors/grey";

function SearchBar(props) {
    const {
        regularPage
    } = props

    const [text, setText] = useState('');

    const deferredText = useDeferredValue(text);

    const dispatch = useDispatch();

    useEffect(() => {
        let toDoList = JSON.parse(localStorage.todoArr);

        if (!regularPage) {
            toDoList = toDoList.filter(item => item.chosen === true)
        }

        if (deferredText) {
            toDoList = toDoList.filter(
                item => item.heading.indexOf(deferredText) !== -1
            )
        }

        dispatch(updateToDoList(toDoList))
    }, [deferredText])

    return (
        <div className={'search_bar'}>
            <SearchIcon sx={{fontSize: 30, color: grey[500]}}/>
            <input
                value={text}
                onChange={(event) => {setText(event.target.value)}}
            />
        </div>
    )
}

export default SearchBar