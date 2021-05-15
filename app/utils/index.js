const map = new Map();

export const newId = (prefix='id') => {
    let lastId = 0;
    if(map.has(prefix)) lastId = lastId = map.get(prefix)
    map.set(prefix, ++lastId);
    return `${prefix}${lastId}`;
}