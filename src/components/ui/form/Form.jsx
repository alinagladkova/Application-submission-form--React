import cn from "classnames";
import styles from "./form.module.scss";
import FormContent from "../../main/mainPage/formContent/FormContent";
import Modal from "../../main/mainPage/modalWindow/Modal";
import Topbar from "../../main/topbar/Topbar";
import { useRef, useEffect, useState } from "react";

export default function Form({}) {
  const [inputValue, setInputValue] = useState("");
  const [activeModal, setActiveModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const formRef = useRef(null);

  const handleInputValue = (inputValue) => {
    setInputValue(inputValue);
  };

  const modalHandler = () => {
    setActiveModal(true);
  };

  const closeModalHandler = (modalState) => {
    setActiveModal(modalState);
    console.log(modalState);
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

  //Scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Устанавливаем состояние, если прокрутка больше 0
    } else {
      setIsScrolled(false); // Сбрасываем состояние, если прокрутка на верх
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Добавляем обработчик прокрутки
    return () => {
      window.removeEventListener("scroll", handleScroll); // Удаляем обработчик при размонтировании
    };
  }, []);

  return (
    <form className={cn(styles.form)} onSubmit={formHandler} ref={formRef}>
      <div className={cn(styles[`form__topbar`], isScrolled && !activeModal ? styles[`form__topbar--sticky`] : "")}>
        <Topbar inputValue={inputValue} openModal={modalHandler} />
      </div>
      <div className={cn(styles[`form__content`])}>
        <FormContent inputValueHandler={handleInputValue} />
      </div>
      <Modal isOpen={activeModal} closeModalHandler={closeModalHandler} />
    </form>
  );
}
