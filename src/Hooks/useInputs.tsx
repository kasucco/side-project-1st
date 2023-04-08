import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  ChangeEventHandler,
} from "react";

type ReturnTypes<T> = [
  T,
  ChangeEventHandler<HTMLInputElement>,
  Dispatch<SetStateAction<T>>
];

const useInputs = <T,>(initialValue: T): ReturnTypes<T> => {
  const [form, setForm] = useState(initialValue);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target.value as unknown as T;
      setForm(value);
    },
    []
  );
  return [form, onChangeHandler, setForm];
};

export default useInputs;
