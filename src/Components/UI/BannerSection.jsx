import BannerLinks from "./BannerLinks";
import BannerProfile from "./BannerProfile";
import classes from "./BannerSection.module.css";
import SocialLinks from "./SocialLinks";
export default function BannerSection() {
  return (
    <div className={classes.bannerCard} id="home-card">
      <div className={`${classes.profile} ${classes.noPhoto}`}>
        <div className={classes.profileContent}>
          <div
            className={`${classes.slide} ${classes.lazyloaded}`}
            data-bg="https://ryancv.bslthemes.com/wp-content/uploads/2021/12/man5_big.jpeg"
            style={{
              backgroundImage:
                "url(" +
                "https://ryancv.bslthemes.com/wp-content/uploads/2021/12/man5_big.jpeg" +
                ")",
            }}
          ></div>
          <BannerProfile />
          <SocialLinks />
        </div>
      </div>
      <BannerLinks />
    </div>
  );
}
