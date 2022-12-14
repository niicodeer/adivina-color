import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import Header from "./components/Header";
import ColorMode from "./components/ColorMode";
import ColorGrid from "./components/ColorGrid";
import { BsCheck, BsCloudy, BsX } from "react-icons/bs";
import { getRandomColor } from "./getColor";

import "./App.css";

function App() {
  const body = document.querySelector("body");

  const [darkMode, setDarkMode] = useState(false);

  const [color, setColor] = useState("grey");
  const [answers, setAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(undefined);
  const [next, setNext] = useState(false);

  //counters
  const [click, setClick] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [points, setPoints] = useState(0);
  const [plus, setPlus] = useState("1");

  if (darkMode) {
    body.style.backgroundColor = "#000";
  } else {
    body.style.backgroundColor = "#fff";
  }

  const handleClick = (answer) => {
    setClick((prev) => prev + 1);
    if (answer === color) {
      setIsCorrect(true);
      setCorrectAnswers((prev) => prev + 1);
      //Si acierto a la primera, sumo 2 puntos
      if (click < 1) {
        setPoints((prev) => prev + 2);
        setPlus("+2");
      } else {
        //Sino sumo 1
        setPoints((prev) => prev + 1);
        setPlus("+1");
      }

      setClick((prev) => prev * 0);
      setTimeout(() => setNext(!next), 500);
    } else {
      setIsCorrect(false);
      setWrongAnswers((prev) => prev + 1);
      setTimeout(() => setIsCorrect(undefined), 300);
      //Si no acierto en 2 intentos, no sumo y pasa al siguiente color
      if (click >= 1) {
        setClick((prev) => prev * 0);
        setTimeout(() => setNext(!next), 300);
      }
    }
  };

  const handleReset = () => {
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setPoints(0);
  };

  useEffect(() => {
    const currentColor = getRandomColor();
    setColor(currentColor);

    setAnswers(
      [currentColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
    setIsCorrect(undefined);
    setClick(0);
    setPlus("");
  }, [next]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "app app-dark" : "app app-light"}>
        <Header />
        <main className="container">
          <div className={darkMode ? "title title-dark" : "title title-light"}>
            <h1>Adivina el color</h1>
          </div>

          <section className="color__mode">
            <ColorMode mode="Hexadecimal" />
          </section>

          <section className="color__main">
            <div
              className="color__main__colorBox"
              style={{ backgroundColor: `${color}` }}
            />
            <div className="color__main__score">
              <span>{plus}</span>
              <div
                className={
                  darkMode
                    ? "color__main__score-points score-dark"
                    : "color__main__score-points"
                }
              >
                <h4>Puntos:</h4>
                <span>{points}</span>
              </div>
              <div className="color__main__score-counter">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsCheck fontSize={24} color="#0fa958" />
                  <p>: {correctAnswers}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsX fontSize={24} color="#ec0000" />
                  <p>: {wrongAnswers}</p>
                </div>
              </div>
            </div>
          </section>

          {/* //////////////////////////////////// */}
          <section className="color__buttons">
            <div className="color__buttons__text">
              <p>¿Cuál es el color correcto?</p>
              {isCorrect === true && (
                <span style={{ color: "green" }}>Correcto!</span>
              )}
              {isCorrect === false && (
                <span style={{ color: "red" }}>Incorrecto!</span>
              )}
            </div>

            <div className="color__buttons__options">
              <div>
                {answers.map((answer) => (
                  <button
                    key={answer}
                    onClick={() => handleClick(answer)}
                    className={darkMode ? "button-dark" : ""}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <div
                className={
                  darkMode
                    ? "color__buttons__options-percentage-dark"
                    : "color__buttons__options-percentage"
                }
              >
                <p>% de acierto:</p>
                <span>
                  {points === 0
                    ? "0"
                    : Math.floor(
                        (correctAnswers / (correctAnswers + wrongAnswers)) * 100
                      )}{" "}
                  %
                </span>
              </div>
            </div>

            <div className="color__buttons__btns-footer">
              <button
                className={
                  darkMode
                    ? "color__buttons__next-btn-dark"
                    : "color__buttons__next-btn"
                }
                onClick={() => setNext(!next)}
              >
                Siguiente
              </button>
              <button
                className={
                  darkMode
                    ? "color__buttons__reset-btn dark-reset"
                    : "color__buttons__reset-btn"
                }
                onClick={handleReset}
              >
                Resetear puntaje
              </button>
            </div>
          </section>
          <section className="color__references">
            <h4>Algunas referencias:</h4>
            <ColorGrid />
          </section>
        </main>
        <footer className={darkMode ? "footer-dark" : "footer"}>
          <p>Developed by: Nico Radín</p>
          <div>
            <a
              href="https://www.linkedin.com/in/nicolas-radin-089117251/"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="https://github.com/niicodeer" target="_blank">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
