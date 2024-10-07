import { useEffect } from "react";
import { pageMetaDetails } from "../../userDetails";
import { useTranslation } from "react-i18next";

const useSetWebsiteHeader = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    //set page icon here
    let link = document.getElementById("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = pageMetaDetails.profile;

    //set page description here
    let descriptionMeta = document.querySelector("meta[name~='description']");
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.name = "description";
      document.getElementsByTagName("head")[0].appendChild(descriptionMeta);
    }
    descriptionMeta.content =
      pageMetaDetails.description[i18n.resolvedLanguage];
  }, []);
};

export default useSetWebsiteHeader;
