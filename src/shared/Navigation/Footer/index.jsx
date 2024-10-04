import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsWhatsapp, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

import { contacts } from "../../../userDetails";
import images from "../../constants/images";
import { client } from "../../../client";
import AppWrap from "../../HOC/AppWrap";
import MotionWrap from "../../HOC/MotionWrap";

import "./index.css";

const socialMediaAccounts = [
  { Icon: <BsWhatsapp />, link: "https://wa.me/967773225233" },
  {
    Icon: <BsFacebook />,
    link: "https://www.facebook.com/profile.php?id=100006180916326",
  },
  {
    Icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/abdul-qader-sh-4ba626320/",
  },
  {
    Icon: <BsGithub />,
    link: "https://github.com/Qadoor-SH",
  },
];
const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email, message, name } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSendMessage = () => {
    setLoading(() => true);
    setIsFormSubmitted(() => false);
    const contact = {
      _type: "contact",
      ...formData,
    };
    client
      .create(contact)
      .then(() => {
        setLoading(() => false);
        setIsFormSubmitted(() => true);
      })
      .catch(() => {
        setIsFormSubmitted(false);
        setLoading(false);
      });
  };
  return (
    <>
      <h2 className="head-text">{t("coffee_chat")}</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <a href={`mailto: ${contacts.email}`} className="p-text">
            <img src={images.email} alt="email" />
            {contacts.email}
          </a>
        </div>
        <div className="app__footer-card">
          <a href={`tel: ${contacts.mobile}`} className="p-text">
            <img src={images.mobile} alt="mobile" />
            {contacts.mobile}
          </a>
        </div>
      </div>

      {isFormSubmitted ? (
        <div>
          <h3 className="head-text">{t("thanks_for_getting_in_touch")}</h3>
        </div>
      ) : (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder={t("your_name")}
              value={name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder={t("your_email")}
              value={email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
              placeholder={t("your_message")}
            ></textarea>
          </div>
          <button
            type="button"
            className="p-text"
            onClick={handleSendMessage}
            disabled={loading}
          >
            {loading ? t("sending_message") : t("send_message")}
          </button>
        </div>
      )}
      <div className="app__footer-accounts app__flex">
        {socialMediaAccounts.map(({ Icon, link }) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={link}
            className="app__flex"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {Icon}
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
