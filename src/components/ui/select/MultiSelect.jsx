import cn from "classnames";
import styles from "./multiSelect.module.scss";
import { useEffect, useState } from "react";
import Input from "../input/Input";
import Search from "../search/Search";
import Button from "../button/Button";

export default function MultiSelect({ title, mockData, id, name }) {
  const [isShown, setIsShown] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  //открываем окно опций при нажатии на +
  const setStateIsShown = () => {
    setIsShown((prev) => !prev);
  };

  //открываем поле поиска в списке опций
  const setStateIsSearchActive = () => {
    setIsSearchActive((prev) => !prev);
  };

  //получаем вводимое в поле Search
  const inputHandler = (inputValue) => {
    setInputValue(inputValue);
  };

  //выбираем опцию(user) из списка и добавляем в поле
  const handleSelectUser = (newUser) => {
    //проверяем нет ли такого же юзера в массиве
    const checkUserAdded = selectedOptions.find((option) => option.value === newUser.value);
    if (!checkUserAdded) {
      const addedUsers = mockData.filter((option) => option.value === newUser.value);
      setSelectedOptions((prev) => [...prev, ...addedUsers]);
    }
  };

  //чистим выбранные опции
  const clearSelectedOptions = () => {
    setSelectedOptions([]);
  };

  //чистим поисковое поле в options
  const clearInputSearch = () => {
    setInputValue("");
  };

  //на крестик убираем опции из поля
  const handleRemoveUser = (user) => {
    setSelectedOptions((prev) => prev.filter((option) => option.value !== user.value));
  };

  //обработчик клика на Esc
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === "Escape") {
        setIsShown(false);
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isShown]);

  return (
    <div className={cn(styles.select)}>
      <h6>{title}</h6>
      <div className={cn(styles[`select__inner`])}>
        <div className={cn(styles[`select__field`])}>
          <Input type="text" placeholder="" id={id} name={name} label={null} hidden={true} />
          <div className={cn(styles[`select__selected-options`])}>
            {selectedOptions.map((user) => (
              <span key={user.id} className={cn(styles[`select__tag`])}>
                {user.label}
                {selectedOptions.length > 1 ? (
                  <div className={cn(styles[`select__tag-remove`])}>
                    <Button use="closeTag" icon="Union.png" handler={() => handleRemoveUser(user)} />
                  </div>
                ) : (
                  ""
                )}
              </span>
            ))}
          </div>
          <div className={cn(styles[`select__selected-options-control`])}>
            {isShown ? (
              <Button use="clearOptions" icon="close-circle.png" handler={clearSelectedOptions} />
            ) : (
              <Button use="showOptions" icon="schevron-down.png" handler={setStateIsShown} />
            )}
          </div>
        </div>
        <div className={cn(styles[`select__options`], isShown ? styles[`select__options--active`] : "")}>
          <div className={cn(styles[`select__options-search`], isSearchActive ? styles[`select__options-search--active`] : "")}>
            <Search use="clear" icon="close-circle.png" type="text" inputHandler={inputHandler} handler={clearInputSearch} />
          </div>
          <div className={cn(styles[`select__options-list`])}>
            {console.log(inputValue)}
            {mockData
              .filter((user) => {
                if (inputValue !== undefined) return user.value.toLowerCase().includes(inputValue.toLowerCase());
              })
              .map((user) => (
                <div className={cn(styles[`select__option`])} key={user.value} onClick={() => handleSelectUser(user)}>
                  {user.label}
                </div>
              ))}
          </div>
        </div>
        <div className={cn(styles[`select__btn`])}>
          <Button use="addOption" icon="plus.png" handler={setStateIsShown} />
        </div>
        <div className={cn(styles[`select__btn`])}>
          <Button use="searchForOption" icon="selectorSearch.png" handler={setStateIsSearchActive} />
        </div>
      </div>
    </div>
  );
}
