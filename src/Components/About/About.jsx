import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { client, urlFor } from "../../client";
import AppWrap from "../../shared/HOC/AppWrap";
import MotionWrap from "../../shared/HOC/MotionWrap";
import "./About.css";
const About = () => {
  const { i18n } = useTranslation();
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client
      .fetch(query)
      .then((data) => {
        setAbouts(data);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <h2 className="head-text">
        <Trans i18nKey={"i_know_good_development"}>
          I know that <span className="text-secondary">Good Development</span>
        </Trans>
        <br />
        <Trans i18nKey={"means_good_business"}>
          means <span className="text-secondary">Good Business</span>
        </Trans>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} className="" />
            <h2 className="bold-text mt-5">
              {about.title[i18n.resolvedLanguage]}
            </h2>
            <p className="p-text mt-3">
              {about.description[i18n.resolvedLanguage]}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
); // export default About;
