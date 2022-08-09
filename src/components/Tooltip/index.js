import React, {useEffect, useRef, useState} from "react";

import './style.scss'

function Tooltip(props) {
    const {
        trigger,
        content,
    } = props;

    const [isOpenHelp, setOpenHelp] = useState(false);

    const tooltipRef = useRef(null);

    const onOpenHelp = () => {
        setOpenHelp(!isOpenHelp);
    }

    const onClickDocument = (event) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
            setOpenHelp(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClickDocument);

        return () => {
            document.removeEventListener('click', onClickDocument);
        }
    }, [tooltipRef])

    return(
        <div className={'tooltip'} ref={tooltipRef}>
            {
                <div
                    onClick={onOpenHelp}
                    className={'tooltip__icon'}
                >
                    {trigger}
                </div>
            }
            {
                isOpenHelp &&
                <div className={'tooltip__content'}>
                    {content}
                </div>
            }
        </div>
    )
}

export default Tooltip;