import cn from "classnames";
import styles from "./input.module.scss";
import Button from "../button/Button";

export default function Input({ type, placeholder, use, icon }) {
  // const inputAction = (e) => {
  //   if (type === "text") {
  //     return inputHandler(e, e.target.value.trim());
  //   }
  // };
  // onChange = { inputAction };
  return (
    <div className={cn(styles.input)}>
      <input className={cn(styles[`input__inner`])} type={type} placeholder={placeholder}></input>
      <Button use={use} icon={icon}></Button>
    </div>
  );
}
