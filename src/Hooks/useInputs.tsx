import { useState, useCallback, ChangeEvent } from "react";
// type onChangeType = (e :ChangeEvent<HTMLInputElement>)=>void;

interface userState {
  userId?: string;
  password?: string;
}
function useInputs(initialForm: userState | null) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChangeHandler = useCallback<
    (e: ChangeEvent<HTMLInputElement>) => void
  >((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  //   const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, setForm, onChangeHandler];
}

export default useInputs;
