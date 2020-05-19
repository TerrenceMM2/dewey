export const truncate = (value, length) => {
    if (!value) {
        return;
    }

    if (value.length <= length) {
        return value;
    }

    return value.slice(0, length) + '...';
};
