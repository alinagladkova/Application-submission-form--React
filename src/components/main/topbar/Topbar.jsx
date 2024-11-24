import cn from "classnames";
import styles from "./topbar.module.scss";
import Button from "../../ui/button/Button";

export default function Topbar() {
  return (
    <div className={cn(styles.topbar)}>
      <div className={cn(styles[`topbar__control`])}>
        <div className={cn(styles[`topbar__column`])}>
          <p className={cn(styles[`topbar__mini-task`])}>Подзадача</p>
          <div className={cn(styles[`topbar__btn`])}>
            <Button use="createTask" text="Создать" />
          </div>
        </div>
        <div className={cn(styles[`topbar__column`])}>
          <div className={cn(styles[`topbar__btn`])}>
            <Button use="save" text="Сохранить" />
          </div>
          <div className={cn(styles[`topbar__btn`])}>
            <Button use="saveNClose" text="Сохранить и выйти" />
          </div>
        </div>
      </div>
      <h1 className={cn(styles[`topbar__title`])}>
        STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller
      </h1>
    </div>
  );
}
//сделать доп атрибут на разные виды кнопок
