import { arialUnicode } from "../../styles/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="flex flex-col gap-3">
            <p className={`${arialUnicode.className}`}>
                ───── ⟢ ・⸝⸝
            </p>
            <div className="flex flex-row gap-3">
                <a
                    href="mailto:nicolexcui@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="fa-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/nicolexcui/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="fa-icon" />
                </a>
                <a
                    href="https://github.com/nisu75"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="lg" className="fa-icon" />
                </a>
            </div>
        </div>
    );
}

