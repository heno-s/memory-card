import ScoreBoard from "./ScoreBoard.jsx";
export default function Header() {
    return (
        <div className="header">
            <div className="description">
                <div className="title">Amphibia Memory Game</div>
                <span>
                    Get points by clicking on an image but don't click
                    on any more than once!
                </span>
            </div>

            <ScoreBoard />
        </div>
    );
}
