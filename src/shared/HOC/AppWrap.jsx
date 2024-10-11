import { useTranslation } from "react-i18next";
import NavigationDots from "../UIElements/NavigationDots";
import SocialMedia from "../UIElements/SocialMedia";
import { copyrights } from "../../config/userDetails";

const AppWrap = (Component, idName, classNames) => {
  return function HOC() {
    const { i18n } = useTranslation();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <NavigationDots active={idName} />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright ">
            {copyrights.map((right, index) => (
              <p className="p-text" key={right[i18n.resolvedLanguage] + index}>
                {right[i18n.resolvedLanguage]}
              </p>
            ))}
          </div>
        </div>
        <SocialMedia />
      </div>
    );
  };
};

export default AppWrap;
