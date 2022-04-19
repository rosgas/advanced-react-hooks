import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //Check if it's a function (using setTask you can use a function or a value ==> you can use a function in your setState you get back from the useState hook, you can also use a function to calculate the new state in your setState you get back from useLocalStorage)
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    //Set to state
    setLocalStorageValue(value);
    //Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
