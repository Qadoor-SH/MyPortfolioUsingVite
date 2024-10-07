import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const NavbarLinks = ({ items }) => {
  const { t } = useTranslation();

  return (
    <>
      <ul className="app__navbar-links">
        {items.map((item) => (
          <li key={item} className="app__flex p-text">
            <div></div>
            <a href={`#${item}`}>{t(item)}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

NavbarLinks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default NavbarLinks;
