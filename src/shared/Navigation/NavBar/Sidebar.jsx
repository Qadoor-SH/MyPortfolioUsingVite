import { useState } from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";
import { HiX, HiMenuAlt4 } from "react-icons/hi";

import "./index.css";
const Sidebar = ({ items }) => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="app__navbar-menu">
      <button
        className="app__navbar-menu-btn app__flex"
        onClick={() => setToggle(true)}
      >
        <HiMenuAlt4 />
      </button>
      {toggle && (
        <aside>
          <div>
            <button className="app__flex" onClick={() => setToggle(false)}>
              <HiX />
            </button>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="app__navbar-menu-item"
                    onClick={() => setToggle(false)}
                  >
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
