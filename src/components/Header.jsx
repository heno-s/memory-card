import ScoreBoard from "./ScoreBoard.jsx";
import HeaderStyles from "./Header.module.css";

export default function Header({ score, bestScore }) {
    return (
        <div className={HeaderStyles.header}>
            <div>
                <h1 className={HeaderStyles.title}>
                    Amphibia Memory Game
                </h1>
                <span>
                    Get points by clicking on an image but don't click
                    on any more than once!
                </span>
            </div>

            <ScoreBoard score={score} bestScore={bestScore} />
        </div>
    );
}
