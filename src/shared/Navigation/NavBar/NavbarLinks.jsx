import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const NavbarLinks = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
        {items.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="block py-2 px-3 text-gray rounded md:p-0"
            >
              {t(item)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

NavbarLinks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default NavbarLinks;
