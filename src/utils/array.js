export const sortByDate = (array) => {
    array.sort((firstItem, secondItem) => {
        const a = new Date(Date.parse(firstItem.date));

        const b = new Date(Date.parse(secondItem.date));

        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
}