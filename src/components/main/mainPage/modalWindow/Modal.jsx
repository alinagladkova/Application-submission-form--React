import cn from "classnames";
import styles from "./modal.module.scss";
import FormContent from "../formContent/FormContent";
import Button from "../../../ui/button/Button";
import { useState } from "react";

export default function Modal({ isOpen }) {
  const [isShown, setIsShown] = useState();

  const setStateIsShown = () => {
    // setIsShown((prev) => !prev);
  };

  return (
    // style={isOpen ? { visibility: "visible", opacity: 1 } : { visibility: "hidden", opacity: 0 }}
    <div className={cn(styles.modal)}>
      <div className={cn(styles[`modal__wrapper`])}>
        <div className={cn(styles[`modal__container`])}>
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
                  {/*  handler={setStateIsShown} */}
                  <Button use="cancel" text="Отменить" />
                </div>
              </div>
            </div>
            <h1 className={cn(styles[`modal__title`])}> Новая запись </h1>
          </div>
          <div className={cn(styles[`modal__content`])}>
            <FormContent />
          </div>
        </div>
      </div>
    </div>
  );
}
