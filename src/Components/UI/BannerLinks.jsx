import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function BannerLinks() {
  return (
    <div className="lnks">
      <a
        href="https://ryancv.bslthemes.com/wp-content/uploads/2022/07/Dublin-Resume-Template-Modern.pdf"
        className="lnk"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text">Download CV</span>
        <FontAwesomeIcon className="ion" icon={faDownload} />
      </a>
      <Link to="/contact" className="lnk">
        <span className="text">Contact Me</span>
        <FontAwesomeIcon className="ion" icon={faPaperPlane} />
      </Link>
    </div>
  );
}
