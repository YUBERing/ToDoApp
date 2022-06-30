import {React} from 'react';

import './style.scss';


function Category(props) {
    const {
        label,
        index,
        func,
    } = props;

    return (
        <div className='categories_point' key={index} onClick = {() => {func(index)}}>
            {label}
        </div>
    )
}

export default Category;