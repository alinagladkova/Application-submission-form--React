import cn from "classnames";
import styles from "./formContent.module.scss";
import Input from "../../../ui/input/Input";
import { mockUsers, mockGroups } from "../../../../mockData/mockData";
import MultiSelect from "../../../ui/select/MultiSelect";
import { v4 as uuidv4 } from "uuid";

import Button from "../../../ui/button/Button";

export default function FormContent({ inputValueHandler }) {
  const handleInputValue = (inputValue) => {
    inputValueHandler(inputValue);
  };

  //template получился загруженным, но его можно сделать через куда симпатичнее, если сделать массив полей
  //данных с соответствующими полями + добавить им свойство простого импута/календаря/мультиселекта -
  //дифференциировать таким образом. Тогда мы бы смогли пройтись мапом по такому массиву и сам код выглядел бы компактнее

  return (
    <div className={cn(styles[`form-content`])}>
      <div className={cn(styles[`form-content__task-description`])}>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="text" label="Тема" inputHandler={handleInputValue} id={uuidv4()} name="theme" required="true" />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="text" label="Статус" id={uuidv4()} name="status" />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="text" label="Описание" id={uuidv4()} name="description" />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-search`])}>
          <div className={cn(styles[`form-content__search-input`])}>
            <Input type="text" label="Продукт" id={uuidv4()} name="product" />
          </div>
          <div className={cn(styles[`form-content__task-search-btn`])}>
            <Button use="searchForOption" icon="selectorSearch.png" />
          </div>
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="text" label="Рабочие заметки" id={uuidv4()} name="notes" required="true" />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="text" label="Приоритет" id={uuidv4()} name="priority" />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-select`])}>
          <MultiSelect name="responsible" title="Ответственный" mockData={mockUsers} id={uuidv4()} />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-select`])}>
          <MultiSelect name="group" title="Группа" mockData={mockGroups} id={uuidv4()} />
        </fieldset>
      </div>
      <div className={cn(styles[`form-content__comments`])}>
        <fieldset className={cn(styles[`form-content__long-input`])}>
          <Input type="text" label="Комментарии" id={uuidv4()} name="comments" />
        </fieldset>
      </div>
      <div className={cn(styles[`form-content__coordinating`])}>
        <fieldset className={cn(styles[`form-content__long-input`])}>
          <MultiSelect name="coordinating" title="Согласующие" mockData={mockUsers} id={uuidv4()} />
        </fieldset>
      </div>
      <div className={cn(styles[`form-content__date`])}>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="date" label="Когда открыто" id={uuidv4()} name="dateOpen" />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="date" label="Когда создано" id={uuidv4()} name="dateCreate" />
        </fieldset>
      </div>
      <div className={cn(styles[`form-content__creator`])}>
        <fieldset className={cn(styles[`form-content__task-select`])}>
          <MultiSelect name="whoOpened" title="Кем открыто" mockData={mockUsers} id={uuidv4()} />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-select`])}>
          <MultiSelect name="whoCreated" title="Кем создано" mockData={mockUsers} id={uuidv4()} />
        </fieldset>
      </div>
    </div>
  );
}
