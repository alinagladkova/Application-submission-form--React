import cn from "classnames";
import styles from "./form.module.scss";
import FormContent from "../../main/mainPage/formContent/FormContent";
import Modal from "../../main/mainPage/modalWindow/Modal";
import Topbar from "../../main/topbar/Topbar";
import { useRef, useState } from "react";

export default function Form({}) {
  const [inputValue, setInputValue] = useState("");
  const [activeModal, setactiveModal] = useState(false);
  const formRef = useRef(null);

  const handleInputValue = (inputValue) => {
    setInputValue(inputValue);
  };

  const modalHandler = () => {
    setactiveModal((prev) => !prev);
  };

  //функция для создания fetch
  const sendFormToServer = () => {
    const data = new FormData(formRef.current);
    fetch("https://anyapi.ru", {
      method: "POST",
      body: JSON.stringify(Array.from(data.entries())),
      headers: {
        // Добавляем необходимые заголовки
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Форма заполнена и сохранена!"))
      .catch((error) => console.log("ОШИБКА: Сервер не отвечает. Попробуйте позже."));
  };

  const formHandler = (e) => {
    e.preventDefault();
    sendFormToServer();
  };

  return (
    <form className={cn(styles.form)} onSubmit={formHandler} ref={formRef}>
      <div className={cn(styles[`form__topbar`])}>
        <Topbar inputValue={inputValue} openModal={modalHandler} />
      </div>
      <div className={cn(styles[`form__content`])}>
        <FormContent inputValueHandler={handleInputValue} />
      </div>
      <Modal isOpen={activeModal} />
    </form>
  );
}
