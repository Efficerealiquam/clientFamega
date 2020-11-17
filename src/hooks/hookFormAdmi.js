import { useState } from "react";
/* Nuestro Hook personalizado para los Forms */
export const useFormAdmin = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
