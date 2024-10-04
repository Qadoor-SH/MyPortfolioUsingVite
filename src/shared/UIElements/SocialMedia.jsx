// import { socialMediaAccounts } from "../../userDetails";
import { BsWhatsapp, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
const socialMediaAccounts = [
  { Icon: <BsWhatsapp />, link: "https://wa.me/967773225233" },
  {
    Icon: <BsFacebook />,
    link: "https://www.facebook.com/profile.php?id=100006180916326",
  },
  {
    Icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/abdul-qader-sh-4ba626320/",
  },
  {
    Icon: <BsGithub />,
    link: "https://github.com/Qadoor-SH",
  },
];
const SocialMedia = () => {
  return (
    <div className="app__social">
      {socialMediaAccounts.map(({ Icon, link }, index) => (
        <div key={link + index}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {Icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
