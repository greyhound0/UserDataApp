import { useEffect } from "react";

function useLocalStorage(key, value) {
  useEffect(() => {
    console.log("event");
    return () => {
      console.log("return--x");
      localStorage.setItem(key, JSON.stringify(value));
    };
  }, [key, value]);
}

export default useLocalStorage;
