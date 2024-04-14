import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPaperPlane,
  faRectangleList,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const NavigationMenus = [
  {
    name: "About",
    path: "/",
    icon: <FontAwesomeIcon className={`${classes.icon}`} icon={faUser} />,
  },
  {
    name: "Resume",
    path: "/resume",
    icon: (
      <FontAwesomeIcon className={`${classes.icon}`} icon={faRectangleList} />
    ),
  },
  {
    name: "Work",
    path: "/work",
    icon: <FontAwesomeIcon className={`${classes.icon}`} icon={faEye} />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon className={`${classes.icon}`} icon={faPaperPlane} />,
  },
];
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.profile}>
        <div className={classes.title}>Ryan Adlard</div>
        <div className={classes.subtitle}>
          <div className="typing-title" style={{ display: "none" }}>
            <p>Web Designer</p>
            <p>Blogger</p>
            <p>Freelancer</p>
            <p>Photographer</p>
          </div>
          <span className="r-typed">Blogger</span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true">
            |
          </span>
        </div>
      </div>
      <a className={classes.menuBtn}>
        <span></span>
      </a>

      <div className={classes.topMenu}>
        <div className={classes.menuMainContainer}>
          <ul className={classes.list}>
            {NavigationMenus.map((menu) => (
              <li key={menu.path}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) => (isActive ? classes.active : "")}
                  end
                >
                  {menu.icon}
                  <span className="name">{menu.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
