import cn from "classnames";
import styles from "./topbar.module.scss";
import Button from "../../ui/button/Button";

export default function Topbar({ inputValue, openModal }) {
  return (
    <div className={cn(styles.topbar)} onScroll={(event) => console.log(event.target)}>
      <div className={cn(styles[`topbar__control`])}>
        <div className={cn(styles[`topbar__column`])}>
          <p className={cn(styles[`topbar__mini-task`])}>Подзадача</p>
          <div className={cn(styles[`topbar__btn`])}>
            <Button use="createTask" text="Создать" handler={openModal} />
          </div>
        </div>
        <div className={cn(styles[`topbar__column`], styles[`topbar__column--last`])}>
          <div className={cn(styles[`topbar__btn`])}>
            <Button use="save" text="Сохранить" submit />
          </div>
          <div className={cn(styles[`topbar__btn`])}>
            <Button use="saveNClose" text="Сохранить и выйти" />
          </div>
        </div>
      </div>
      <h1 className={cn(styles[`topbar__title`])}> STSK0004783 {inputValue}</h1>
    </div>
  );
}
