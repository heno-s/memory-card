import Card from "./Card";
import CardContainerStyles from "./CardContainer.module.css";
import anneImage from "../images/anne.jpg";

export default function CardContainer() {
    return (
        <div className={CardContainerStyles["card-container"]}>
            <Card image={anneImage} name={"anne boonchuy"} />
        </div>
    );
}
