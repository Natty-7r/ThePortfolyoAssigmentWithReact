import { useContext } from "react";
import { UserDataContext } from "../contexts/userData";
import TypingAnimation from "./TypingAnimation";
import { UIContext } from "../contexts/UI";

const HomeBanner = () => {
  const { about, social_handles } = useContext(UserDataContext);
  const { nav, changeNav } = useContext(UIContext);
  const activePageClass = () => ("home" === nav ? "" : "page--inactive");
  return (
    <div
      className={`page home-banner white-bg ${activePageClass("home")}`}
      id={"home"}
      onClick={() => changeNav("home", false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <img
                src={about.avatar.url}
                title={`${about.name}'s profile image`}
                alt={`${about.name}'s profile image`}
              />
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">Hello, There</h6>
                    <h1 className="dark-color blue-after">I'm {about.name}</h1>
                    <p>I am {about.title}</p>
                    <p>
                      I Develop{" "}
                      <TypingAnimation
                        texts={[
                          " 3D visuals",
                          "user interfaces",
                          " web applications",
                        ]}
                      />
                    </p>
                    <div className="btn-bar">
                      <a href="#" className="btn btn-theme">
                        Download CV
                      </a>
                    </div>
                  </div>
                  <ul className="social-icons">
                    {social_handles.map((social_handle) => (
                      <li key={social_handle._id}>
                        <a
                          className={`${social_handle.platform.toLocaleLowerCase()}`}
                          href={social_handle.url}
                        >
                          <img src={social_handle.image.url} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
