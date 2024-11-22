import cn from "classnames";
import styles from "./mainPage.module.scss";
import Topbar from "../topbar/Topbar";

export default function MainPage() {
  return (
    <div className={cn(styles[`main-page`])}>
      <div className={cn(styles[`main-page__topbar`])}>
        <Topbar />
      </div>
    </div>
  );
}
