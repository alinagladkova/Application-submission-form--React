import cn from "classnames";
import styles from "./search.module.scss";
import Button from "../button/Button";
import { useState } from "react";

export default function Search({ type, placeholder, use, icon, inputHandler, handler }) {
  const [value, setValue] = useState("");

  const inputAction = (e) => {
    e.preventDefault();
    setValue(e.target.value.trim());
    if (type === "text") {
      return inputHandler(e.target.value.trim());
    }
  };

  return (
    <div className={cn(styles.search)}>
      <input className={cn(styles[`search__input`])} type={type} placeholder={placeholder} onChange={inputAction}></input>
      <Button use={use} icon={icon} handler={handler}></Button>
    </div>
  );
}
