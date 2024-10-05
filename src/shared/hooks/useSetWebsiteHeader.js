import { useEffect } from "react";
import { pageHeader } from "../../userDetails";

const useSetWebsiteHeader = () => {
  useEffect(() => {
    //set page icon here
    let link = document.getElementById("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = pageHeader.favIcon;

    //set page description here
    let descriptionMeta = document.querySelector("meta[name~='description']");
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.name = "description";
      document.getElementsByTagName("head")[0].appendChild(descriptionMeta);
    }
    descriptionMeta.content = pageHeader.description;
  }, []);
};

export default useSetWebsiteHeader;
