export const isEmpty = function (value) {
    if (value === false) {
        return true;
    }

    if (value instanceof File) {
        return false;
    }

    if (typeof value === 'undefined' || value === null) {
        return true;
    }

    if (typeof value === 'object' && Object.keys(value).length <= 0) {
        return true;
    }

    if (typeof value === 'string' || value.isArray) {
        return value.length <= 0;
    }

    if (typeof value === 'number') {
        return value === 0;
    }

    return false;
}

export const uuid = function () {
    return 'xxxxxxxxxxxxy'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const deleteFromArray = function(list, index) {
    list.splice(index, 1)
}

export const onlyUniqueFilter = function (value, index, self) {
    return self.indexOf(value) === index;
}
