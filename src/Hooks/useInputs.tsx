import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
} from "react";
type ReturnTypes<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>
];

const useInputs = <T,>(initialValue: T): ReturnTypes<T> => {
  const [form, setForm] = useState(initialValue);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value as unknown as T);
  }, []);
  return [form, onChangeHandler, setForm];
};

export default useInputs;
