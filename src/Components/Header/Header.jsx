import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import images from "../../shared/constants/images";
import { heroSectionDetails } from "../../userDetails";
import AppWrap from "../../shared/HOC/AppWrap";
import "./Header.css";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
// const mainSkillsCircles = [images.redux, images.react, images.netCore];
// const tags = [
//   { en: "Web Developer", ar: "مطور برامج" },
//   { en: "Freelancer", ar: "عامل حر" },
// ];
const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info "
      >
        <div className=" app__header-badge">
          <div className="badge-cmp app__flex">
            <span className="">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text ">{t("hello_i_am")}</p>
              <h1 className="head-text">AbdulQader</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            {heroSectionDetails.tags.map((tag, index) => (
              <p className="p-text" key={tag[i18n.resolvedLanguage] + index}>
                {tag[i18n.resolvedLanguage]}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="app__header-img"
      >
        <img src={images.myProfile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle "
          alt="profile-circle"
          src={images.circle}
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        transition={{ duration: 0.5, delay: 0.5 }}
        // className=" items-start h-full ms-4"
        className="app__header-circles "
      >
        {heroSectionDetails.mainSkillsCircles.map((circle, index) => (
          <div
            // className="circle-cmp flex justify-center items-center rounded-[50%] bg-white shadow-card first:w-24 first:h-24 last:w-16 last:h-16 even:w-36 even:h-36 even:m-7"
            className=" circle-cmp app__flex"
            key={`circle-${index}`}
          >
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
