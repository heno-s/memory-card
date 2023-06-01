import Card from "./Card";
import CardContainerStyles from "./CardContainer.module.css";
import { shuffle } from "../utils";

import anne from "../images/anne.jpg";
import captain from "../images/captain.png";
import hop from "../images/hop.png";
import leopold from "../images/leopold.png";
import maddie from "../images/maddie.jpg";
import mayor from "../images/mayor.jpg";
import polly from "../images/polly.png";
import sadie from "../images/sadie.png";
import sasha from "../images/sasha.jpg";
import sprig from "../images/sprig.png";
import sylvia from "../images/sylvia.png";
import wally from "../images/wally.png";
import { useState } from "react";

export default function CardContainer({
    resetGame,
    increment,
    reset,
}) {
    const [cards, setCards] = useState(
        shuffle([
            {
                image: anne,
                name: "anne boonchuy",
            },
            {
                image: captain,
                name: "captain grime",
            },
            {
                image: hop,
                name: "hop hop plantar",
            },
            {
                image: leopold,
                name: "leopold loggle",
            },
            {
                image: maddie,
                name: "maddie flour",
            },
            {
                image: mayor,
                name: "mayor toadstool",
            },
            {
                image: polly,
                name: "polly plantar",
            },
            {
                image: sadie,
                name: "sadie croaker",
            },
            {
                image: sasha,
                name: "sasha",
            },
            {
                image: sprig,
                name: "sprig plantar",
            },
            {
                image: sylvia,
                name: "sylvia sundew",
            },
            {
                image: wally,
                name: "wally",
            },
        ])
    );

    function shuffleCards() {
        setCards(shuffle(cards));
    }

    return (
        <div className={CardContainerStyles["card-container"]}>
            {cards.map((cardData) => (
                <Card
                    {...cardData}
                    key={cardData.image}
                    resetGame={resetGame}
                    increment={increment}
                    shuffleCards={shuffleCards}
                    reset={reset}
                />
            ))}
        </div>
    );
}
