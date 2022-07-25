import React from "react";

import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';

import {nanoid} from "nanoid";

export const PATHS_TO_PAGES = {
    MAIN: '/',
    FAVORITE: '/favorite'
}

export const LINK_LIST = [
    {
        id: nanoid(),
        icon: <StarHalfIcon sx={{fontSize: 30}}/>,
        label: 'Все задачи',
        link: PATHS_TO_PAGES.MAIN
    },
    {
        id: nanoid(),
        icon: <StarIcon sx={{fontSize: 30}}/>,
        label: 'Избранные',
        link: PATHS_TO_PAGES.FAVORITE
    },
]