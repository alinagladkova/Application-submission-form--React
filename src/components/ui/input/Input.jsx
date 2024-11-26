import cn from "classnames";
import styles from "./input.module.scss";
import { useState } from "react";
import Label from "../label/Label";

export default function Input({ type, placeholder, id, name, label, hidden, required, inputHandler = () => {} }) {
  const [value, setValue] = useState("");

  const inputAction = (e) => {
    e.preventDefault();
    setValue(e.target.value.trim());

    if (type === "text") {
      return inputHandler(e.target.value.trim());
    }
  };

  return (
    <>
      <Label label={label} id={id} required={required ? true : false} />
      <input className={cn(styles[`input__field`])} name={name} id={id} type={type} placeholder={placeholder} hidden={hidden} onChange={inputAction}></input>
    </>
  );
}
