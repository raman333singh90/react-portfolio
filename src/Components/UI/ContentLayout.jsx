import classes from "../../Pages/Page.module.css";
export default function ContentLayout({ children, section, sectionTitle }) {
  console.log(sectionTitle);
  return (
    <section className="section-container">
      <div className={`${classes.content} ${classes[section]}`}>
        <div className={classes.title}>
          <span className={classes["first-word"]}></span>
          <span>{sectionTitle}</span>
        </div>
        {children}
      </div>
    </section>
  );
}
