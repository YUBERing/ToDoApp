import React from "react";

import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';

import {CATEGORY_TYPE} from "./tasks";

import {nanoid} from "nanoid";

export const LINK_PAGE = {
    TASKS: 'tasks',
    FAVORITE: 'favorite',
}

export const LINK_TASKS = `/tasks/:type`;

export const LINK_FAVORITE = '/favorite/:type';

export const LINK_START_TASKS = LINK_TASKS.replace(':type', CATEGORY_TYPE.ALL);

export const LINK_START_FAVORITE = LINK_FAVORITE.replace(':type', CATEGORY_TYPE.ALL);

export const LINK_LIST = [
    {
        id: nanoid(),
        icon: <StarHalfIcon sx={{fontSize: 30}}/>,
        label: 'Все задачи',
        link: LINK_START_TASKS,
        page: LINK_PAGE.TASKS,
    },
    {
        id: nanoid(),
        icon: <StarIcon sx={{fontSize: 30}}/>,
        label: 'Избранные',
        link: LINK_START_FAVORITE,
        page: LINK_PAGE.FAVORITE,
    },
];

