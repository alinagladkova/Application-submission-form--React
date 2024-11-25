import cn from "classnames";
import styles from "./input.module.scss";

export default function Input({ type, placeholder, label, hidden, inputHandler }) {
  const inputAction = (e) => {
    if (type === "text") {
      return inputHandler(e, e.target.value.trim());
    }
  };

  return (
    <label className={cn(styles.input)}>
      {label}
      <input className={cn(styles[`input__field`])} type={type} placeholder={placeholder} hidden={hidden} onChange={inputAction}></input>
    </label>
  );
}
