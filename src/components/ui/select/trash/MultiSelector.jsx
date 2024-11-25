import cn from "classnames";
import styles from "./select.module.scss";
// import Select from "react-select";

import Button from "../../button/Button";

export default function MultiSelect({ title, mockUsers }) {
  return (
    <div className={cn(styles.select)}>
      <h6>{title}</h6>
      <div className={cn(styles[`select__inner`])}>
        <select className={cn(styles[`select__field`])} multiple={true} options={mockUsers} placeholder="">
          {mockUsers.map((user) => (
            <option key={user.label}>{user.label}</option>
          ))}
        </select>
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
