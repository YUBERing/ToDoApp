import {React} from 'react';

import './style.scss';

function TextArea(props){
    const {
        label,
        value,
        cols,
        rows,
        name,
        className,
        onChange
    } = props;

    return (
        <div className={className}>
            {label}
            <textarea
                required
                name=''
                cols={cols}
                rows={rows}
                value={value}
                onChange={(event) => {onChange(event.target.value, name)}}
            />
        </div>
    )
}

export default TextArea;