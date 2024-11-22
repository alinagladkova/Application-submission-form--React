import cn from "classnames";
import styles from "./button.module.scss";

export default function Button({ use, icon, text, handler }) {
  return <button className={cn(styles.btn, styles[`btn--${use}`])}>{text === undefined ? <img src={`icons/${icon}`} alt="icon" /> : { text }}</button>;
}