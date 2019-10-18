import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  // make a piece of state based of the value in local storage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  // useEffect to update the local storage when state changes
  useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state))
  },[state]);
  return [state,setState]
}
