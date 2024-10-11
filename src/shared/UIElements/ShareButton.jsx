import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { BsShareFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { deployedWebUrl, pageMetaDetails } from "../../config/userDetails";

import "./ShareButton.css";

const iconsVariants = {
  size: 40,
  round: true,
};
const ShareButton = () => {
  const [toggle, setToggle] = useState(false);
  const { i18n } = useTranslation();
  return (
    <>
      <div className="app__share app__flex">
        <div
          className={`app__share-icon app__flex ${toggle && "icon-active"}`}
          onClick={() => setToggle((prev) => !prev)}
        >
          <BsShareFill />
        </div>
        {toggle && (
          <motion.div
            className={`app__flex ${!toggle && "hidden"}`}
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 0.85,
              ease: "linear",
              // delayChildren: 2,
              // staggerDirection: 1,
            }}
          >
            <FacebookShareButton
              hashtag={"portfolio"}
              url={deployedWebUrl}
              lang={i18n.resolvedLanguage}
              dir={i18n.dir(i18n.resolvedLanguage)}
            >
              <FacebookIcon {...iconsVariants} />
            </FacebookShareButton>

            <TwitterShareButton
              title={pageMetaDetails.title[i18n.resolvedLanguage]}
              url={deployedWebUrl}
              lang={i18n.resolvedLanguage}
              dir={i18n.dir(i18n.resolvedLanguage)}
            >
              <XIcon {...iconsVariants} />
            </TwitterShareButton>
            <WhatsappShareButton
              title={pageMetaDetails.title[i18n.resolvedLanguage]}
              separator={`\n ${
                pageMetaDetails.description[i18n.resolvedLanguage]
              } \n`}
              url={deployedWebUrl}
              lang={i18n.resolvedLanguage}
              dir={i18n.dir(i18n.resolvedLanguage)}
            >
              <WhatsappIcon {...iconsVariants} />
            </WhatsappShareButton>

            <TelegramShareButton
              title={pageMetaDetails.title[i18n.resolvedLanguage]}
              url={deployedWebUrl}
              lang={i18n.resolvedLanguage}
              dir={i18n.dir(i18n.resolvedLanguage)}
            >
              <TelegramIcon {...iconsVariants} />
            </TelegramShareButton>
            <LinkedinShareButton
              title={pageMetaDetails.title[i18n.resolvedLanguage]}
              summary={pageMetaDetails.description[i18n.resolvedLanguage]}
              url={deployedWebUrl}
              source={deployedWebUrl}
              lang={i18n.resolvedLanguage}
              dir={i18n.dir(i18n.resolvedLanguage)}
            >
              <LinkedinIcon {...iconsVariants} />
            </LinkedinShareButton>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ShareButton;
