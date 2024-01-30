import style from "./App.module.scss";
import Generator from "./components/Generator";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className={style.App}>
        <main className={style.main}>
          <Generator />
        </main>
        <Footer className={style.footer} />
      </div>
    </>
  );
}

export default App;
