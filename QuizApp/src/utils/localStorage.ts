

export function setData<T>(key : string , data : T) {
    localStorage.setItem(key , JSON.stringify(data));
}

export function getData<T>(key : string): T | null{

    const response = localStorage.getItem(key);

    if(!response)
        return null;

    return  JSON.parse(response);
}

export function removeData<T>(key : string) {
    localStorage.removeItem(key);
}