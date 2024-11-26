import cn from "classnames";
import styles from "./topbar.module.scss";
import Button from "../../ui/button/Button";

export default function Topbar({ inputValue, openModal }) {
  const openModalHandler = () => {
    openModal();
  };

  return (
    // {style={{ boxShadow: `${isScrolled ? "2px 2px 3px gray" : "none"}` }}}
    <div className={cn(styles.topbar)} onScroll={(event) => console.log(event.target)}>
      <div className={cn(styles[`topbar__control`])}>
        <div className={cn(styles[`topbar__column`])}>
          <p className={cn(styles[`topbar__mini-task`])}>Подзадача</p>
          <div className={cn(styles[`topbar__btn`])}>
            <Button use="createTask" text="Создать" handler={openModalHandler} />
          </div>
        </div>
        <div className={cn(styles[`topbar__column`])}>
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
