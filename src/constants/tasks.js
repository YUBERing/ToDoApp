import {nanoid} from "nanoid";

export const CATEGORY_TYPE = {
    ALL: 'ALL',
    YESTERDAY: 'YESTERDAY',
    TODAY: 'TODAY',
    FOR_MONTH: 'FOR_MONTH'
};

export const CATEGORY_LIST = [
    {
        id: nanoid(),
        label: 'Все',
        type: CATEGORY_TYPE.ALL
    },
    {
        id: nanoid(),
        label: 'Вчера',
        type: CATEGORY_TYPE.YESTERDAY
    },
    {
        id: nanoid(),
        label: 'Сегодня',
        type: CATEGORY_TYPE.TODAY
    },
    {
        id: nanoid(),
        label: 'За месяц',
        type: CATEGORY_TYPE.FOR_MONTH
    },
];