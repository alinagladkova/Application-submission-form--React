import cn from "classnames";
import styles from "./modal.module.scss";
import FormContent from "../formContent/FormContent";
import Button from "../../../ui/button/Button";

export default function Modal({ isOpen }) {
  return (
    <div className={cn(styles.modal)} style={isOpen ? { visibility: "visible", opacity: 1 } : { visibility: "hidden", opacity: 0 }}>
      <div className={cn(styles[`modal__topbar`])}>
        <div className={cn(styles[`modal__control`])}>
          <div className={cn(styles[`modal__column`])}>
            <h4 className={cn(styles[`modal__text`])}>Подзадача</h4>
          </div>
          <div className={cn(styles[`modal__column`])}>
            <div className={cn(styles[`modal__btn`])}>
              <Button use="save" text="Сохранить" />
            </div>
            <div className={cn(styles[`modal__btn`])}>
              <Button use="cancel" text="Отменить" />
            </div>
          </div>
        </div>
        <h1 className={cn(styles[`topbar__title`])}> Новая запись </h1>
      </div>
      <div className={cn(styles[`modal__content`])}>
        <FormContent />
      </div>
    </div>
  );
}
