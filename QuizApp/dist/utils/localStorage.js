export function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
export function getData(key) {
    const response = localStorage.getItem(key);
    if (!response)
        return null;
    return JSON.parse(response);
}
export function removeData(key) {
    localStorage.removeItem(key);
}
//# sourceMappingURL=localStorage.js.map