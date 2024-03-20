import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import SectionContainer from "./ui/SectionContainer";
import Testimonials from "./Testimonials";
import { UserDataContext } from "../contexts/userData";
import { UIContext } from "../contexts/UI";
import imagesLoaded from "imagesloaded";
const Portfolio = () => {
  // Isotope
  const { projects, youtube } = useContext(UserDataContext);

  const { setImagePreview, setVideoPlayer } = useContext(UIContext);
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
          itemSelector: ".portfolio-item",
          // layoutMode: "fitRows",
          percentPosition: true,
          masonry: {
            columnWidth: ".portfolio-item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }
    );
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name={"portfolio"}
      title={"My Projects"}
      subTitle={"Latest Work"}
      leftImage="static/img/title-3.jpg"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {" "}
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>{" "}
            <li
              className={`${activeBtn("photoshop")} theme-after`}
              onClick={handleFilterKeyChange("photoshop")}
              data-filter=".photoshop"
            >
              Photoshop
            </li>{" "}
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Website
            </li>{" "}
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Apps
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            {projects.map(
              ({
                _id,
                title,
                description,
                image,
                liveurl,
                githuburl,
                techStack,
              }) => (
                <li className={`portfolio-item website`}>
                  <div className="portfolio-col portfolio-hover-01">
                    <div className="portfolio-img">
                      <a href="#">
                        <img src={image.url} alt={title} />
                      </a>
                      <div className="hover">
                        <div className="action-btn">
                          <a
                            href={youtube.url}
                            target="_black"
                            className="popup-video theme-color"
                            onClick={(e) => {
                              e.preventDefault();
                              setVideoPlayer(liveurl);
                            }}
                          >
                            <i className="fa fa-play" />
                          </a>
                          <a
                            className="lightbox-gallery theme-color"
                            href={image.url}
                            rel="noopener noreferrer"
                            title={`Lightbox gallery image ${title}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setImagePreview(image.url);
                            }}
                          >
                            <i className="fas fa-expand" />
                          </a>
                          <a
                            target="_black"
                            href={githuburl}
                            className="theme-color"
                          >
                            <i className="fa fa-link" />
                          </a>
                        </div>{" "}
                        {/* Video Btn */}
                      </div>{" "}
                      {/* Hover */}
                    </div>
                    <div className="portfolio-info">
                      <h5>{title}</h5>
                      <span>{description}</span>
                      <span>{techStack.join(" ,")}</span>
                    </div>
                  </div>{" "}
                  {/* Portfolio */}
                </li>
              )
            )}
          </ul>{" "}
          {/* row */}
        </div>{" "}
        {/* portfolio content */}
      </div>
      {/* 
          ==========================
            Testimonials
          ==========================
          */}
      <Testimonials />
    </SectionContainer>
  );
};
export default Portfolio;
