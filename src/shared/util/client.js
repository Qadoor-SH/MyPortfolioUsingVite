import { createClient } from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";
const projectId = import.meta.env.VITE_APP_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_APP_SANITY_TOKEN;

export const client = createClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2024-08-04",
  useCdn: true,
  token: token,
});
const builder = imgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
