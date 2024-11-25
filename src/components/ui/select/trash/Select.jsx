import cn from "classnames";
// import styles from "./select.module.scss";
import Select from "react-select";

import Button from "../../button/Button";

export default function MultipleSelect({ title, mockUsers }) {
  return (
    <div className={cn(styles.select)}>
      <h6>{title}</h6>
      <div className={cn(styles[`select__inner`])}>
        <Select className={cn(styles[`select__field`])} options={mockUsers} isMulti placeholder=""></Select>
        <div className={cn(styles[`select__btn`])}>
          <Button use="addOption" icon="plus.png" />
        </div>
        <div className={cn(styles[`select__btn`])}>
          <Button use="searchForOption" icon="selectorSearch.png" />
        </div>
      </div>
    </div>
  );
}
//попробовать поменять стили селекту
