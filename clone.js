function isArray(data) {
    Object.prototype.toString.call(data) === '[Object Array]' ? true : false;
}

function deepClone(data) {
    if (typeof data !== 'object') {
        return data
    }
    var o = isArray(data) ? [] : {};
    for (var key in data) {
        o[key] = deepClone(data[key])
    }
    return o
} 
