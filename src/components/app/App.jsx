import Header from "../global/header/Header";
import Sidebar from "../global/sidebar/Sidebar";
import MainPage from "../main/mainPage/MainPage";

export default function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Sidebar />
        <main className="content">
          <MainPage />
        </main>
      </div>
    </>
  );
}
