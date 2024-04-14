import { useSelector } from "react-redux";
import FunFactIcon from "../Components/Icons/FunFactIcon";
import ServicesIcon from "../Components/Icons/ServicesIcon";
import ContentLayout from "../Components/UI/ContentLayout";
import classes from "./Page.module.css";
export default function AboutPage() {
  const profile = useSelector((state) => state.profile.profile);

  const services = profile.services ?? [];
  const funFacts = profile.funFacts ?? [];
  console.log(funFacts);
  return (
    <div className="page">
      <ContentLayout section="about" sectionTitle="About Me">
        <div className="row">
          <div className="col col-d-6 col-t-12 col-m-12 border-line-v">
            <div className={classes["text-box"]}>
              <div>
                <p>
                  <strong>
                    Hello! I’m {profile.firstName + " " + profile.lastName}.
                  </strong>
                  <br />
                  {profile.aboutText}
                </p>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-12 col-m-12 border-line-v">
            <div className={classes["info-list"]}>
              <ul>
                <li>
                  <strong>
                    <span> Age: </span>
                  </strong>
                  <span> {profile.dob} </span>
                </li>
                <li>
                  <strong>
                    <span> Residence: </span>
                  </strong>
                  <span> {profile.country} </span>
                </li>
                <li>
                  <strong>
                    <span> Freelance: </span>
                  </strong>
                  <span> Available </span>
                </li>
                <li>
                  <strong>
                    <span> Address: </span>
                  </strong>
                  <span> {profile.address}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </ContentLayout>

      <ContentLayout section="services" sectionTitle="My Services">
        <div className="row service-items border-line-v">
          {services.map((service) => (
            <div
              key={service.title}
              className="col col-d-6 col-t-6 col-m-12 border-line-h"
            >
              <div className="service-item">
                <ServicesIcon
                  path={service.iconPath}
                  viewBox={service.iconSize}
                />
                <div className="name">
                  <span> {service.title} </span>
                </div>
                <div className="desc">
                  <div>
                    <p>{service.shortSummary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentLayout>

      <ContentLayout section="fuct" sectionTitle="Fun Facts">
        <div className="row fuct-items">
          {funFacts.map((fact) => (
            <div
              key={fact.fact}
              className="col col-d-3 col-t-3 col-m-6 border-line-v"
            >
              <div className="fuct-item">
                <FunFactIcon path={fact.icon} viewBox={fact.size} />
                <div className="name">
                  <span dangerouslySetInnerHTML={{ __html: fact.fact }}></span>
                </div>
              </div>
            </div>
          ))}
          <div className="clear"></div>
        </div>
      </ContentLayout>
    </div>
  );
}
