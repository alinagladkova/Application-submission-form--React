import cn from "classnames";
import styles from "./tab.module.scss";
import Button from "../../ui/button/Button";

export default function Tab({ text }) {
  return (
    <li className={cn(styles.tab)}>
      <div className={cn(styles[`tab__btn`])}>
        <Button use="openTab" icon="schevron.png" />
      </div>
      <p className={cn(styles[`tab__title`])}>{text}</p>
    </li>
  );
}
