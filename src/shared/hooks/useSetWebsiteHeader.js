import { useEffect } from "react";
// import { pageHeader } from "../constants";
import myProfile from "../../assets/myProfile.png";

const useSetWebsiteHeader = () => {
  useEffect(() => {
    //set page icon here
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
      link.href = myProfile;
    }
    //set page description here
    let descriptionMeta = document.querySelector("meta[name~='description']");
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.name = "description";
      document.getElementsByTagName("head")[0].appendChild(descriptionMeta);
    }
    descriptionMeta.content = "Portfolio Web site created by Eng/Abdul Qader";
  }, []);
};

export default useSetWebsiteHeader;
