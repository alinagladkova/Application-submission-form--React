import cn from "classnames";
import styles from "./header.module.scss";
import Search from "../../ui/search/Search";
import Button from "../../ui/button/Button";

export default function Header() {
  const serchHandler = (e, inputValue) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles[`header__logo`])}>
        <img src="img/Logo.png" alt="Logo" />
      </div>
      <div className={cn(styles[`header__control`])}>
        <div className={cn(styles[`header__search`])}>
          <Search type="text" placeholder="Поиск" use="inputSearch" icon="inputSearch.png" inputHandler={serchHandler}></Search>
        </div>
        <div className={cn(styles[`header__user-info`])}>
          <div className={cn(styles[`header__user-avatar`])}>
            <img src="img/Avatar.png" alt="Avatar" />
          </div>
          <p className={cn(styles[`header__user-name`])}>Максим Галактионов</p>
        </div>
        <div className={cn(styles[`header__button`])}>
          <Button use="settings" icon="settings.png"></Button>
        </div>
      </div>
    </div>
  );
}
