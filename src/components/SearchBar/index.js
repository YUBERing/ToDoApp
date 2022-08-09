import React, {useDeferredValue, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import SearchIcon from '@mui/icons-material/Search';
import Input from "../Input";

import {findTasksForPage} from "../../utils/findTasksForPage";

import {updateToDoList} from "../../store/actionCreators/todos";

import './style.scss'

function SearchBar(props) {
    const {
        isRegularPage
    } = props;

    const [text, setText] = useState('');

    const deferredText = useDeferredValue(text);

    const dispatch = useDispatch();

    useEffect(() => {
        let toDoList = findTasksForPage(isRegularPage);

        if (deferredText) {
            toDoList = toDoList.filter(
                item => item.heading.includes(deferredText)
            );
        }

        dispatch(updateToDoList(toDoList));
    }, [deferredText]);

    return (
            <Input
                icon={<SearchIcon/>}
                value={text}
                actionKey={'search-bar'}
                onChange={setText}
            />
    );
}

export default SearchBar;