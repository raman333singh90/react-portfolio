import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./BannerSection.module.css";
import {
  faDribbble,
  faGithub,
  faSpotify,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <div className={classes.social}>
      <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
        <FontAwesomeIcon className="fab" icon={faDribbble} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/">
        <span className="fab fa-twitter x-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#323232"
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            ></path>
          </svg>
        </span>
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/">
        <FontAwesomeIcon className="fab" icon={faGithub} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
        <FontAwesomeIcon className="fab" icon={faSpotify} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/">
        <FontAwesomeIcon className="fab" icon={faStackOverflow} />
      </a>
    </div>
  );
}
