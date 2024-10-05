import DocumentMeta from "react-document-meta";
import { pageHeader } from "../../userDetails";
const PageMeta = () => {
  const meta = {
    description: pageHeader.description,
    link: {
      rel: "icon",
      href: pageHeader.favIcon,
    },
    meta: {
      name: {
        keywords: pageHeader.keywords,
      },
    },
  };
  return <DocumentMeta {...meta}>PageMeta</DocumentMeta>;
};

export default PageMeta;
