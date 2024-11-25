import cn from "classnames";
import styles from "./tab.module.scss";
import Button from "../../ui/button/Button";

export default function Tab({ text, inputValue }) {
  const regex = new RegExp(`(${inputValue})`, "gi");
  const parts = text.split(regex);

  return (
    <li className={cn(styles.tab)}>
      <div className={cn(styles[`tab__btn`])}>
        <Button use="openTab" icon="schevron.png" />
      </div>
      {inputValue ? (
        <p>
          {parts.map((part, index) =>
            regex.test(part) ? (
              <span key={index} className={cn(styles[`tab__title`])} style={{ backgroundColor: "yellow" }}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </p>
      ) : (
        <p>{text}</p>
      )}
    </li>
  );
}
