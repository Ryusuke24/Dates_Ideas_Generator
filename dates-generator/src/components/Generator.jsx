import { useState } from "react";
import heart from "./heart.svg";
import style from "./Generator.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import usePosition from "./Hooks/usePosition";

function Generator() {
  const [text, setText] = useState("");
  const [randNum, setRandNum] = useState(0);
  const [isFirst, setFirst] = useState(true);

  const { position, error } = usePosition();

  const dates = useSelector(state => state.dates.dates);

  const handleClick = () => {
    let rand = Math.floor(Math.random() * dates.length);
    setText(dates[rand].date);
    setRandNum(rand);
    setFirst(false);
  };

  console.log(position, error, dates[randNum].dataForSearch);

  return (
    <div className={style.generator}>
      <h1>Date Ideas Generator</h1>
      {text && (
        <div className={style.resultArea}>
          <h2>Yours date is:</h2>{" "}
          <input className={style.input} value={text} readOnly />
        </div>
      )}
      {isFirst ? (
        <button className={style.generateButton} onClick={handleClick}>
          Generate <img src={heart} alt="heart" />
        </button>
      ) : (
        <>
          <button className={style.generateButton} onClick={handleClick}>
            Generate another <img src={heart} alt="heart" />
          </button>
          {error ? (
            <h2>{error} Can't open in map</h2>
          ) : (
            <a
              className={style.generateButton}
              href={`https://www.google.com/maps/search/${dates[randNum].dataForSearch}/@${position.latitude},${position.longitude}`}
              target="_blank_"
            >
              Open on map <img src={heart} alt="heart" />
            </a>
          )}
        </>
      )}
    </div>
  );
}

export default Generator;
