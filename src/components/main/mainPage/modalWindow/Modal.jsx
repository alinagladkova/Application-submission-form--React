import cn from "classnames";
import styles from "./modal.module.scss";
import FormContent from "../formContent/FormContent";
import Button from "../../../ui/button/Button";
import { useState, useEffect } from "react";

//знаю, что маодальные окна делать так - плохо,надо через createPortal, однако я эту тему еще не успела изучить
//поэтому выполнила задание так, чтобы оно соответствовало макету

export default function Modal({ isOpen, closeModalHandler }) {
  const [isClosed, setIsShown] = useState(true);

  const closeModal = () => {
    setIsShown(!isOpen);
    closeModalHandler(!isOpen);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === "Escape") {
        closeModal(); // обработчик клика на Esc
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const handleWrapperClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal(); // Закрываем модальное окно, если кликнули на обертку
    }
  };

  return (
    <div className={cn(styles.modal, isOpen ? styles[`modal--open`] : "")}>
      <div className={cn(styles[`modal__wrapper`])} onClick={handleWrapperClick}>
        <div className={cn(styles[`modal__container`])}>
          <div className={cn(styles[`modal__control--forMobile`])}>
            <h4 className={cn(styles[`modal__text--forMobile`])}>Подзадача</h4>
            <div className={cn(styles[`modal__btn--forMobile`])}>
              <Button use="closeModal" icon="close-x.png" handler={closeModal} />
            </div>
          </div>
          <div className={cn(styles[`modal__control`])}>
            <div className={cn(styles[`modal__column`], styles[`modal__column--first`])}>
              <h4 className={cn(styles[`modal__text`])}>Подзадача</h4>
            </div>
            <div className={cn(styles[`modal__column`], styles[`modal__column--last`])}>
              <div className={cn(styles[`modal__btn`])}>
                <Button use="save" text="Сохранить" />
              </div>
              <div className={cn(styles[`modal__btn`])}>
                <Button use="cancel" text="Отменить" handler={closeModal} />
              </div>
            </div>
          </div>
          <h1 className={cn(styles[`modal__title`])}> Новая запись </h1>
          <div className={cn(styles[`modal__content`])}>
            <FormContent />
          </div>
        </div>
      </div>
    </div>
  );
}
