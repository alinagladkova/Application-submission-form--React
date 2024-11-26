import cn from "classnames";
import styles from "./mainPage.module.scss";
import Form from "../../ui/form/Form";

export default function MainPage() {
  return (
    <div className={cn(styles[`main-page`])}>
      <Form />
    </div>
  );
}
