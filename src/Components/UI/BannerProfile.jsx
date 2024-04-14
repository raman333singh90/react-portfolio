import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Typed from "typed.js";
import classes from "./BannerSection.module.css";

export default function BannerProfile() {
  const profile = useSelector((state) => state.profile.profile);
  const [text, setText] = useState("");
  const ref = useRef();

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: profile.jobProfile ?? [],
      typeSpeed: 50,
      backSpeed: 20,
    });

    return () => {
      typed.destroy();
    };
  }, [profile]);

  return (
    <Fragment>
      <div className={classes.title}>
        {profile.firstName} {profile.lastName}
      </div>
      <div className={`${classes.subtitle} ${classes["subtitle-typed"]}`}>
        <span className="r-typed" ref={ref}>
          {text}
        </span>
      </div>
    </Fragment>
  );
}
