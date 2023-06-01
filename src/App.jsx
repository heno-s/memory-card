import "./style.css";
import Header from "./components/Header.jsx";
import CardContainer from "./components/CardContainer.jsx";
import Footer from "./components/Footer.jsx";
import AppStyles from "./App.module.css";
import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [reset, setReset] = useState(false);

    function resetGame() {
        if (score > bestScore) {
            setBestScore(score);
        }
        setScore(0);

        setReset(true);
    }

    function increment() {
        setScore(score + 1);
        setReset(false);
    }

    return (
        <div className={AppStyles.app}>
            <Header score={score} bestScore={bestScore} />
            <CardContainer
                resetGame={resetGame}
                increment={increment}
                reset={reset}
            />
            <Footer />
        </div>
    );
}

export default App;
