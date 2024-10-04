// import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";
import { useState } from "react";

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
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm rounded-lg cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      >
        {supportedLangs[i18n.resolvedLanguage]}
      </button>
      <div
        className={`z-30 absolute w-auto my-4 text-base list-none bg-white divide-y divide-gray rounded-lg shadow ${
          !toggle && "hidden "
        }`}
      >
        <ul className="py-2 font-medium drop ">
          {Object.entries(supportedLangs).map(([code, name]) => (
            <li
              key={code}
              onClick={() => handleChangeLanguage(code)}
              role="none"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <div className="inline-flex items-center">{name}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

LanguageDropdown.propTypes = {
  //   toggle: PropTypes.bool.isRequired,
  //   onChangeLanguage: PropTypes.func.isRequired,
};

export default LanguageDropdown;
