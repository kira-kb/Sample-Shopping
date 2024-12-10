import { useState } from "react";

function useLocalStorage<T>(key: string, initialvalue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialvalue;
    } catch (error) {
      console.log(error);
      return initialvalue;
    }
  });

  const saveValue = (value: T) => {
    setStoredValue(value);
    return window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, saveValue] as const;
}

export default useLocalStorage;
