import cn from "classnames";
import styles from "./formContent.module.scss";
import Input from "../../../ui/input/Input";
import { mockUsers, mockGroups } from "../../../../mockData/mockData";
import MultiSelect from "../../../ui/select/MultiSelect";

export default function FormContent({ inputValueHandler }) {
  const handleInputValue = (e, inputValue) => {
    inputValueHandler(e, inputValue);
  };
  return (
    <div className={cn(styles[`form-content`])}>
      {/* <form> */}
      <div className={cn(styles[`form-content__task-description`])}>
        <div className={cn(styles[`form-content__column`])}>
          <fieldset className={cn(styles[`form-content__task-input`], styles[`form-content__task-input--necessary`])}>
            <Input type="text" label="Тема" inputHandler={handleInputValue} />
          </fieldset>
          <fieldset className={cn(styles[`form-content__task-input`])}>
            <Input type="text" label="Описание" />
          </fieldset>
          <fieldset className={cn(styles[`form-content__task-input`], styles[`form-content__task-input--necessary`])}>
            <Input type="text" label="Рабочие заметки" />
          </fieldset>
          <fieldset className={cn(styles[`form-content__task-select`])}>
            <MultiSelect name="responsible" title="Ответственный" mockData={mockUsers} />
          </fieldset>
        </div>
        <div className={cn(styles[`form-content__column`])}>
          <fieldset className={cn(styles[`form-content__task-input`])}>
            <Input type="text" label="Статус" />
          </fieldset>
          <fieldset className={cn(styles[`form-content__task-input`])}>
            <Input type="text" label="Продукт" />
          </fieldset>
          <fieldset className={cn(styles[`form-content__task-input`])}>
            <Input type="text" label="Приоритет" />
          </fieldset>
          <fieldset className={cn(styles[`form-content__task-select`])}>
            <MultiSelect name="group" title="Группа" mockData={mockGroups} />
          </fieldset>
        </div>
      </div>
      <div className={cn(styles[`form-content__comments`])}>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="text" label="Комментарии" />
        </fieldset>
      </div>
      <div className={cn(styles[`form-content__coordinating`])}>
        <fieldset className={cn(styles[`form-content__task-select`])}>
          <MultiSelect name="coordinating" title="Согласующие" mockData={mockUsers} />
        </fieldset>
      </div>
      <div className={cn(styles[`form-content__date`])}>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="date" label="Когда открыто" />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-input`])}>
          <Input type="date" label="Когда создано" />
        </fieldset>
      </div>
      <div className={cn(styles[`form-content__creator`])}>
        <fieldset className={cn(styles[`form-content__task-select`])}>
          <MultiSelect name="whoOpened" title="Кем открыто" mockData={mockUsers} />
        </fieldset>
        <fieldset className={cn(styles[`form-content__task-select`])}>
          <MultiSelect name="whoCreated" title="Кем создано" mockData={mockUsers} />
        </fieldset>
      </div>
      {/* </form> */}
    </div>
  );
}
