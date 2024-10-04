import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import AppWrap from "../../shared/HOC/AppWrap";
import MotionWrap from "../../shared/HOC/MotionWrap";
import "./Skill.css";

const Skill = () => {
  const { t, i18n } = useTranslation();
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';
    client
      .fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
      .catch(() => {});
    client
      .fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <h2 className="head-text">{t("skills_experience")}</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list ">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works?.map((work) => (
                  <div key={work.name[i18n.resolvedLanguage]}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name[i18n.resolvedLanguage]}
                    >
                      <h4 className="bold-text">
                        {work.name[i18n.resolvedLanguage]}
                      </h4>
                      <p className="p-text ">
                        {work.company[i18n.resolvedLanguage]}
                      </p>
                    </motion.div>
                    <Tooltip
                      id={work.name[i18n.resolvedLanguage]}
                      variant="light"
                    >
                      {work.desc[i18n.resolvedLanguage]}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skill, "app__skills"),
  "skills",
  "app__whitebg"
);
