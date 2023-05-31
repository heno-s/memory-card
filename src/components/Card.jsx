import CardStyles from "./Card.module.css";

export default function Card({ image, name }) {
    return (
        <div className={CardStyles.card}>
            <img src={image} alt={name} />
            <span className={CardStyles.name}>{name}</span>
        </div>
    );
}
