import ScoreBoardStyles from "./ScoreBoard.module.css";

export default function ScoreBoard({ score, bestScore }) {
    return (
        <div className={ScoreBoardStyles["score-board"]}>
            <span>Score: {score}</span>
            <span>Best score: {bestScore}</span>
        </div>
    );
}
