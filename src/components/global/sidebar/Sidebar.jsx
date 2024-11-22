import cn from "classnames";
import styles from "./sidebar.module.scss";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { useState } from "react";
import Tab from "../tab/Tab";

const tabArray = [
  "Моя работа",
  "Структура портала",
  "Личное расписание",
  "Отсутствие на рабочем месте",
  "Портфель услуг",
  "Дашборды",
  "Доски задач",
  "Обращения",
  "События",
  "Инциденты",
  "Проблемы",
  "Настройка каталогов",
  "Запросы на обслуживание",
  "Запросы на изменение",
  "Управление конфигурациями",
  "Управление уровнем услуг",
  "Настройка соответствий",
];

export default function Sidebar() {
  const [isHidden, setIsHidden] = useState(false);

  const setStateIsHidden = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className={cn(styles.sidebar)}>
      <div className={cn(styles[`sidebar__hide-panel`])}>
        <div className={cn(styles[`sidebar__btn`])}>
          <Button use="hide" icon="Hide.png" handler={setStateIsHidden} />
        </div>
        <div className={cn(styles[`sidebar__btn`])}>
          <Button use="star" icon="star.png" />
        </div>
      </div>
      <div className={cn(styles[`sidebar__main-panel`])} style={{ display: `${isHidden ? "inline-block" : "none"}` }}>
        <div className={cn(styles[`sidebar__search-field`])}>
          <div className={cn(styles[`sidebar__search`])}>
            <Input type="text" placeholder="Поиск по меню" icon="filter.png" />
          </div>
          <div className={cn(styles[`sidebar__btn-pin`])}>
            <Button use="pin" icon="Default Button.png" />
          </div>
        </div>
        <div className={cn(styles[`sidebar__tabs`])}>
          <ul className={cn(styles[`sidebar__tabs-list`])}>
            {tabArray.map((title) => (
              <Tab key={title} text={title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

//transition почему-то не работает
//активная кнопка подсвечена синим цветом
