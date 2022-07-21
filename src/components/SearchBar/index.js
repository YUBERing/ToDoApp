import React, {useDeferredValue, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import SearchIcon from '@mui/icons-material/Search';

import {updateToDoList} from "../../store/actionCreators/todos";

import './style.scss'
import Input from "../Input";
import {findTasksAccordingPage} from "../../utils/findTasksAccordingPage";

function SearchBar(props) {
    const {
        regularPage
    } = props;

    const [text, setText] = useState('');

    const deferredText = useDeferredValue(text);

    const dispatch = useDispatch();

    useEffect(() => {
        let toDoList = findTasksAccordingPage(regularPage);

        if (deferredText) {
            toDoList = toDoList.filter(
                item => item.heading.includes(deferredText)
            );
        }

        dispatch(updateToDoList(toDoList));
    }, [deferredText]);

    return (
            <Input
                label={<SearchIcon/>}
                value={text}
                className={'search-bar'}
                onChange={setText}
            />
    );
}

export default SearchBar;