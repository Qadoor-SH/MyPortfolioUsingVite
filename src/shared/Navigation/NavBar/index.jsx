// import  { useState } from "react";
// import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
import { useState } from "react";
import myLogo from "../../../assets/myLogo.png";
import LanguageDropdown from "./LanguageDropdown";
import NavbarLinks from "./NavbarLinks";
import { HiMenuAlt4 } from "react-icons/hi";
import Sidebar from "./Sidebar";
// import { supportedLangs } from "../../i18n/config";
// import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    "home",
    "about",
    "work",
    "skills",
    "testimonials",
    "contact",
  ];

  return (
    <nav className="backdrop-blur-sm bg-opacity-25 w-full fixed z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={myLogo} alt="logo" className="h-8 " />
        </a>
        <div className="flex items-center md:order-2 space-x-1 md:flex-col md:space-x-0 rtl:space-x-reverse">
          <LanguageDropdown
          // onChangeLanguage={handleChangeLanguage}
          // toggle={toggleLang}
          />
        </div>
        <button className="block items-center text-black font-medium justify-center py-2 text-sm rounded-lg cursor-pointer md:hidden">
          <HiMenuAlt4 onClick={() => setToggle(true)} color="black" />
        </button>
        <NavbarLinks items={navItems} onToggle={setToggle} />
        {toggle && (
          <Sidebar items={navItems} onToggle={() => setToggle(false)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
