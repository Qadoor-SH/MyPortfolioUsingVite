import { useState } from "react";
import { useTranslation } from "react-i18next";

import { supportedLangs } from "../../i18n/config";

const LanguageDropdown = () => {
  const [toggle, setToggle] = useState(false);
  const { i18n } = useTranslation();
  const handleChangeLanguage = (code) => {
    setToggle(() => false);
    if (code && code === i18n.resolvedLanguage) {
      return;
    }
    i18n.changeLanguage(code);
  };
  return (
    <div className="app__navbar-languages ">
      <button
        type="button"
        className="app__navbar-languages-btn"
        onClick={() => setToggle((prev) => !prev)}
      >
        {supportedLangs[i18n.resolvedLanguage]}
      </button>
      <div className={`app__navbar-languages-item ${!toggle && "hidden "}`}>
        <ul>
          {Object.entries(supportedLangs).map(([code, name]) => (
            <li
              key={code}
              onClick={() => handleChangeLanguage(code)}
              role="none"
            >
              <button role="menuitem">{name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
