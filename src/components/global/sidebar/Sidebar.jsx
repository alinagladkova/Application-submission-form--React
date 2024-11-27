import cn from "classnames";
import styles from "./sidebar.module.scss";
import Search from "../../ui/search/Search";
import Button from "../../ui/button/Button";
import { useState } from "react";
import Tab from "../tab/Tab";

//сделаем вручную вкладки
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
  const [inputValue, setInputValue] = useState("");

  const setStateIsHidden = () => {
    setIsHidden((prev) => !prev);
  };

  const searchHandler = (e, inputValue) => {
    e.preventDefault();
    setInputValue(inputValue);
  };

  return (
    <div className={cn(styles.sidebar)}>
      <div className={cn(styles[`sidebar__hide-panel`])}>
        <div className={cn(styles[`sidebar__btn`])}>
          <Button use="hide" icon="Hide.png" handler={setStateIsHidden} />
        </div>
        <div className={cn(styles[`sidebar__btn`])}>
          <Button use="star" icon="Star.png" />
        </div>
      </div>
      <div className={cn(styles[`sidebar__main-panel`], isHidden ? styles[`sidebar__main-panel--open`] : "")}>
        <div className={cn(styles[`sidebar__search-field`])}>
          <div className={cn(styles[`sidebar__search`])}>
            <Search type="text" placeholder="Поиск по меню" use="inputFilter" icon="filter.png" inputHandler={searchHandler} />
          </div>
          <div className={cn(styles[`sidebar__btn-pin`])}>
            <Button use="pin" icon="Pin.png" />
          </div>
        </div>
        <div className={cn(styles[`sidebar__tabs`])}>
          <ul className={cn(styles[`sidebar__tabs-list`])}>
            {tabArray.map((title) => (
              <Tab key={title} text={title} inputValue={inputValue} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
