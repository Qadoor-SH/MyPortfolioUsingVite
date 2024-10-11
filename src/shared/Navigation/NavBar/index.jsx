import { pageMetaDetails } from "../../../config/userDetails";
import LanguageDropdown from "./LanguageDropdown";
import NavbarLinks from "./NavbarLinks";
import Sidebar from "./Sidebar";
import "./index.css";
const Navbar = () => {
  const navItems = [
    "home",
    "about",
    "work",
    "skills",
    "testimonials",
    "contact",
  ];

  return (
    <nav className="app__navbar">
      <a href="#" className="app__navbar-logo">
        <img src={pageMetaDetails.logo} alt="logo" />
      </a>
      <LanguageDropdown />
      <NavbarLinks items={navItems} />
      <Sidebar items={navItems} />
    </nav>
  );
};

export default Navbar;
