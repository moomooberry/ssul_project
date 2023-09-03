import { useCallback, useState } from "react";

const useBoolean = (state: boolean) => {
  const [value, setValue] = useState(state);

  const setBoolean = useCallback((value: boolean) => {
    setValue(value);
  }, []);

  const setTrue = useCallback(() => setValue(true), []);

  const setFalse = useCallback(() => setValue(false), []);

  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return {
    value,
    setBoolean,
    setTrue,
    setFalse,
    toggle,
  };
};

export default useBoolean;
