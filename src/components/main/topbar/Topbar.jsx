import cn from "classnames";
import styles from "./topbar.module.scss";
import Button from "../../ui/button/Button";

export default function Topbar() {
  return (
    <div className={cn(styles.topbar)}>
      <div className={cn(styles[`topbar__left-side`])}>
        <p className={cn(styles[`topbar__mini-task`])}>Подзадача</p>
        <div className={cn(styles[`topbar__btn`])}>
          <Button use="createTask" text="Создать" />
        </div>
      </div>
      <h1 className={cn(styles[`topbar__title`])}></h1>
    </div>
  );
}
