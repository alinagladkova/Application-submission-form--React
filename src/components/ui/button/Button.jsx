import cn from "classnames";
import styles from "./button.module.scss";

export default function Button({ use, icon, text, submit, handler }) {
  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={handler} type={submit ? "submit" : "button"}>
      {text === undefined ? <img src={`icons/${icon}`} alt="icon" /> : <p>{text}</p>}
    </button>
  );
}
