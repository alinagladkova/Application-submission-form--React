import cn from "classnames";
import styles from "./mainPage.module.scss";
import Topbar from "../topbar/Topbar";

import { useState } from "react";
import FormContent from "./formContent/FormContent";
import Modal from "./modalWindow/Modal";

export default function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [activeModal, setactiveModal] = useState(false);

  const handleInputValue = (e, inputValue) => {
    e.preventDefault();
    setInputValue(inputValue);
  };

  const modalHandler = () => {
    setactiveModal((prev) => !prev);
  };

  return (
    <div className={cn(styles[`main-page`])}>
      <form>
        <div className={cn(styles[`main-page__topbar`])}>
          <Topbar inputValue={inputValue} openModal={modalHandler} />
        </div>
        <div className={cn(styles[`main-page__content`])}>
          <FormContent inputValueHandler={handleInputValue} />
        </div>
        <Modal isOpen={activeModal} />
      </form>
    </div>
  );
}
