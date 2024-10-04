import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { client, urlFor } from "../../client";
import AppWrap from "../../shared/HOC/AppWrap";
import MotionWrap from "../../shared/HOC/MotionWrap";
import "./Work.css";

const Work = () => {
  const { i18n } = useTranslation();
  const [workFilters, setWorkFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState();
  useEffect(() => {
    const query = '*[_type == "works"]';
    client
      .fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
        let tempItems = ["All"];
        data.forEach((work) => {
          work.tags?.forEach((tag) => {
            if (!tempItems.includes(tag)) {
              tempItems.push(tag);
            }
          });
        });
        setWorkFilters(() => [...tempItems]);
      })
      .catch(() => {});
  }, []);
  const handleWorkItem = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works?.filter((work) => work?.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        <Trans i18nKey={"my_creative_portfolio_section"}>
          My Creative <span>Portfolio</span>
          <br />
          section
        </Trans>
      </h2>
      <div className="app__work-filter">
        {workFilters.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkItem(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : "item-inactive"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork?.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.title[i18n.resolvedLanguage]}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                whileInView={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title[i18n.resolvedLanguage]}</h4>
              <p className="p-text mt-2">
                {work.description[i18n.resolvedLanguage]}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work?.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
