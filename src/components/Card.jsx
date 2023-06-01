import { useEffect, useState } from "react";
import CardStyles from "./Card.module.css";

export default function Card({
    image,
    name,
    shuffleCards,
    resetGame,
    increment,
    reset,
}) {
    const [wasClicked, setWasClicked] = useState(false);

    function handleClick() {
        if (wasClicked) {
            resetGame();
        } else {
            increment();
        }
        shuffleCards();
        setWasClicked(true);
    }

    useEffect(() => {
        if (reset) {
            setWasClicked(false);
        }

        return () => {
            console.log("UNMOUNTING");
        };
    }, [reset]);

    return (
        <div className={CardStyles.card} onClick={handleClick}>
            <img src={image} alt={name} />
            <span className={CardStyles.name}>{name}</span>
        </div>
    );
}
