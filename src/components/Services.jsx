import { useContext, useMemo } from "react";
import { UserDataContext } from "../contexts/userData";
import SectionContainer from "./ui/SectionContainer";
import {
  catagoriesExperience,
  categorizeSkills,
} from "../utils/contants/skill";
import { formateDate } from "../utils/contants/date";

const Services = () => {
  const { skills, timeline } = useContext(UserDataContext);
  const categorizedSkills = useMemo(() => categorizeSkills(skills), []);
  const [educations, experiences] = useMemo(
    () => catagoriesExperience(timeline),
    []
  );
  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"My Resume"}
      subTitle={"History"}
      leftImage="static/img/title-2.jpg"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Experience</h2>
            <ul>
              {experiences.map(
                ({
                  company_name,
                  summary,
                  startDate,
                  endDate,
                  jobTitle,
                  _id,
                  jobLocaion,
                  bulletPoints,
                }) => (
                  <li key={_id}>
                    <div className="r-name">
                      <i className="theme-bg ti-briefcase" />
                      <span className="dark-color">{company_name}</span>
                      <label className="dark-color">{jobTitle}</label>
                      <label>
                        {formateDate(startDate)} - {formateDate(endDate)}
                      </label>
                    </div>

                    <div className="r-info">
                      <p>{summary}</p>
                    </div>
                    <div className="r-info">
                      <ul>
                        {bulletPoints.map((bulletPoint) => (
                          <p className="mb-2">
                            <i className=" fas fa-circle pr-2" />
                            {bulletPoint}
                          </p>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Education</h2>
            <ul>
              {educations.map(
                ({
                  company_name,
                  summary,
                  startDate,
                  endDate,
                  jobTitle,
                  _id,
                  jobLocaion,
                  bulletPoints,
                }) => (
                  <li key={_id}>
                    <div className="r-name">
                      <i className="theme-bg fas fa-graduation-cap" />
                      <span className="dark-color">{company_name}</span>
                      <label className="dark-color">{jobTitle}</label>
                      <label>
                        {formateDate(startDate)} - {formateDate(endDate)}
                      </label>
                    </div>

                    <div className="r-info">
                      <p>{summary}</p>
                    </div>
                    <div className="r-info">
                      <ul>
                        {bulletPoints.map((bulletPoint) => (
                          <p className="mb-2">
                            <i className=" fas fa-circle pr-2" />
                            {bulletPoint}
                          </p>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">My Skills</h2>
        </div>
        {categorizedSkills.map((categorizedSkill) => (
          <div className="row my-5">
            <div className="col-md-6 p-30px-r sm-p-15px-r">
              <h3 className="dark-color">{categorizedSkill[0].displayName}</h3>
              <div className="skills">
                {categorizedSkill[0].skills.map((skill) => (
                  <div className="progress-lt">
                    <h6>{skill.name}</h6>
                    <span className="theme-bg">{skill.percentage}%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                      {/* /progress-bar */}
                    </div>
                    {/* /progress */}
                  </div>
                ))}

                {/* /progress-lt */}
              </div>
            </div>
            {categorizedSkill[1] && (
              <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
                <h3 className="dark-color">
                  {categorizedSkill[1].displayName}
                </h3>
                <div className="skills">
                  {categorizedSkill[1].skills.map((skill) => (
                    <div className="progress-lt">
                      <h6>{skill.name}</h6>
                      <span className="theme-bg">{skill.percentage}%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                        {/* /progress-bar */}
                      </div>
                      {/* /progress */}
                    </div>
                  ))}

                  {/* /progress-lt */}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
