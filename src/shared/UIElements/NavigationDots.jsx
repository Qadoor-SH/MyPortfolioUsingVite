import PropTypes from "prop-types";

const NavigationDots = ({ active }) => {
  const navItems = [
    "home",
    "about",
    "work",
    "skills",
    "testimonials",
    "contact",
  ];
  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { background: "#313BAC" } : {}}
        >
          <span></span>
        </a>
      ))}
    </div>
  );
};

NavigationDots.propTypes = {
  active: PropTypes.string,
};

export default NavigationDots;
