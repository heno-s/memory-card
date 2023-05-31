import FooterStyles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className={FooterStyles.footer}>
            <span>Contact:</span>
            <a
                href="https://github.com/heno-s"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="https://facebook.com/henoplastoveretazky.sury"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
                href="https://www.instagram.com/henosury/"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </footer>
    );
}
