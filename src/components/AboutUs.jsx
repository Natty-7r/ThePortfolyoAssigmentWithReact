import { useContext } from "react";
import SectionContainer from "./ui/SectionContainer";
import { UserDataContext } from "../contexts/userData";

const AboutUs = () => {
  const { services, projects, testimonials, about } =
    useContext(UserDataContext);
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"About"}
      subTitle={"WHO I AM"}
      // leftImage="static/img/title-1.jpg"
      leftImage="static/img/title-1.jpg"
      leftImageTitle={"About Me"}
    >
      <div className="row ">
        <div className="col-md-4  ">
          {/* <img src="static/img/my-pic.jpg" title alt /> */}
          <img
            src={about.avatar.url}
            title={`${about.name}'s profile image`}
            alt={`${about.name}'s profile image`}
          />
        </div>
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">I'm {about.name}</h3>
            <p className="m-0px">{about.description}</p>
          </div>{" "}
          {/* about-text */}
          <div className="row m-30px-t">
            {services.map((service) => (
              <Serivce service={service} />
            ))}
          </div>{" "}
          {/* row */}
          <div className="btn-bar">
            <a href="#" className="btn btn-theme">
              Download CV
            </a>
          </div>
        </div>
      </div>{" "}
      {/* row */}
      {/* 
     ==========================
       Counter
     ==========================
     */}
      <div className="counter-row m-50px-t p-40px-t lg-m-35px-t lg-p-25px-t sm-p-15px-t">
        <div className="row">
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={testimonials.length}>
                <i className="theme-color ti-face-smile" />
                <div className="count dark-color">{testimonials.length}</div>
                <h6>Happy Clients</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-headphone" />
                <div className="count dark-color">375</div>
                <h6>Telephonic Talk</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-camera" />
                <div className="count dark-color">375</div>
                <h6>Photo Capture</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={projects.length}>
                <i className="theme-color ti-thumb-up" />
                <div className="count dark-color">{projects.length}</div>
                <h6>Projects</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
        </div>{" "}
        {/* row */}
      </div>
    </SectionContainer>
  );
};

const Serivce = ({ service }) => {
  return (
    <div className="col-md-6 col-sm-6 m-30px-b">
      <div className="feature-box">
        {/* <i className="icon dark-color theme-after ti-mobile" /> */}
        <img src={service.image.url} className="img-thumbnail" />
        <div className="feature-content">
          <h5 className="dark-color">{service.name}</h5>
          <p>{service.desc}</p>
          <div className="home-text  feature-content">
            <h6 className="dark-color theme-after text-start bg">
              {service.charge}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
