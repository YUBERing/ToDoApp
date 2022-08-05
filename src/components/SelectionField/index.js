import React from "react";

import SelectionFieldCategory from "./Category";
import SearchBar from "../SearchBar";

import {CATEGORY_LIST} from "../../constants/tasks";

import './style.scss'

function SelectionField(props) {

    const {
        isRegularPage,
    } = props;

    const getCategories = () => {
        return CATEGORY_LIST.map((item, i) => {
            const {
                id,
                label,
                type,
            } = item;

            return (
                <SelectionFieldCategory
                    key={id}
                    label={label}
                    type={type}
                    isRegularPage={isRegularPage}
                />
            );
        });
    }

    return (
        <div className={'selection-field'}>
            <div className='selection-field__categories'>
                {getCategories()}
            </div>
            <SearchBar isRegularPage={isRegularPage}/>
        </div>
    );
}

export default SelectionField;