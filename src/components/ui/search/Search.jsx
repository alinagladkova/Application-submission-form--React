import cn from "classnames";
import styles from "./search.module.scss";
import Button from "../button/Button";

export default function Search({ type, placeholder, use, icon, inputHandler, handler }) {
  const inputAction = (e) => {
    if (type === "text") {
      return inputHandler(e, e.target.value.trim());
    }
  };

  return (
    <div className={cn(styles.search)}>
      <input className={cn(styles[`search__input`])} type={type} placeholder={placeholder} onChange={inputAction}></input>
      <Button use={use} icon={icon} handler={handler}></Button>
    </div>
  );
}
