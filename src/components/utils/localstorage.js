export const getLocalStoragItem = (key) => {
  return localStorage.getItem(key) && localStorage.getItem(key) !== "undefined"
    ? JSON.parse(localStorage.getItem(key))
    : [];
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
