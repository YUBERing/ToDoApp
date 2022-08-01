import React, {useEffect, useRef} from "react";

import './style.scss'

function Tooltip(props) {
    const {
        trigger,
        content,
        tooltipRef,
    } = props;

    useEffect(() => {
        document.addEventListener('click', (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                trigger();
            }
        });

        return () => {
            document.removeEventListener('click', (event) => {
                if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                    trigger();
                }
            });
        }
    }, [tooltipRef])

    return(
        <div onBlur={trigger} className={'tooltip'}>
            {content}
        </div>
    )
}

export default Tooltip;