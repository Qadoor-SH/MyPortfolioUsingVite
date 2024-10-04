import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { HiX } from "react-icons/hi";
const Sidebar = ({ items, onToggle }) => {
  const { t } = useTranslation();

  return (
    <motion.aside
      className={`app__sidebar bg-white`}
      whileInView={{ x: [0, 0] }}
      transition={{ duration: 0.85, ease: "linear" }}
    >
      <div>
        <HiX onClick={onToggle} />
        <ul className="space-y-2 font-medium ">
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="flex items-center p-2 rounded-lg ms-3"
                onClick={onToggle}
              >
                {t(item)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

Sidebar.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
