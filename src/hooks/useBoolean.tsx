import { useCallback, useState } from "react";

const useBoolean = (state: boolean) => {
  const [value, setValue] = useState(state);

  const setTrue = useCallback(() => setValue(true), []);

  const setFalse = useCallback(() => setValue(false), []);

  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  };
};

export default useBoolean;
