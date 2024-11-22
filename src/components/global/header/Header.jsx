import cn from "classnames";
import styles from "./header.module.scss";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";

export default function Header() {
  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles[`header__logo`])}>
        <img src="img/Logo.png" alt="Logo" />
      </div>
      <div className={cn(styles[`header__control`])}>
        <div className={cn(styles[`header__search`])}>
          <Input type="text" placeholder="Поиск" icon="Padding.png"></Input>
        </div>
        <div className={cn(styles[`header__user-info`])}>
          <div className={cn(styles[`header__user-avatar`])}>
            <img src="img/Avatar.png" alt="Avatar" />
          </div>
          <p className={cn(styles[`header__user-name`])}>Максим Галактионов</p>
        </div>
        <div className={cn(styles[`header__button`])}>
          <Button use="settings" icon="Vector.png"></Button>
        </div>
      </div>
    </div>
  );
}

//сделать тень шапки при скролле
