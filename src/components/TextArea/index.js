import {React} from 'react';

import './style.scss';

function TextArea(props){
    const {
        label,
        value,
        onChange
    } = props;

    return (
        <div className='discriptionPlace'>
            <div>{label}</div>
            <textarea
                required
                name=''
                cols={60}
                rows={12}
                value={value}
                onChange={(event) => {onChange(event.target.value, 'description')}}
            />
        </div>
    )
}

export default TextArea;