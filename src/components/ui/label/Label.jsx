import cn from "classnames";
import styles from "./label.module.scss";

export default function Label({ label, id, required }) {
  return (
    <label className={cn(styles.label, required ? styles[`label--required`] : "")} htmlFor={id}>
      {label}
    </label>
  );
}
