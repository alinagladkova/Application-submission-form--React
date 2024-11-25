import cn from "classnames";
import styles from "./multiSelect.module.scss";
import { useState } from "react";
import Input from "../input/Input";
import Search from "../search/Search";
import Button from "../button/Button";

export default function MultiSelect({ title, mockData }) {
  const [isShown, setIsShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const setStateIsShown = () => {
    // setIsShown((prev) => !prev); //почему лагает
  };

  const inputHandler = (e, inputValue) => {
    e.preventDefault();
    setInputValue(inputValue);
    console.log(inputValue);
  };

  const handleSelectUser = (newUser) => {
    const addedUsers = mockData.filter((option) => option.value === newUser.value);
    setSelectedOptions((prev) => [...prev, ...addedUsers]);
  };

  const clearInputHandler = () => {
    // setInputValue("");
  };

  return (
    <div className={cn(styles.select)}>
      <h6>{title}</h6>
      <div className={cn(styles[`select__inner`])}>
        <div className={cn(styles[`select__field`])}>
          <Input type="text" name="responsible" hidden={true} />
          <div className={cn(styles[`select__selected-options`])}>
            {selectedOptions.map((user) => (
              <span key={user.label} className={cn(styles[`select__tag`])}>
                {user.label}
              </span>
            ))}
          </div>
          <div className={cn(styles[`select__arrow`])}>
            <Button use="showOptions" icon="schevron-down.png" />
          </div>
        </div>
        <div className={cn(styles[`select__options`])}>
          {/* style={{ display: `${isShown ? "block" : "none"}` }} */}
          <div className={cn(styles[`select__options-search`])}>
            <Search use="clear" icon="close-circle.png" type="text" inputHandler={inputHandler} handler={clearInputHandler} />
          </div>
          <div className={cn(styles[`select__options-list`])}>
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
          <Button use="searchForOption" icon="selectorSearch.png" />
        </div>
      </div>
    </div>
  );
}

{
  /* <span className={cn(styles[`select__tag-remove`])} onClick={() => handleRemoveUser(user)}>
                  x
                </span> */
}
