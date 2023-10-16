// sectionsData.js
import { modelsData } from "./modelsData";

export const sectionsData = [
  ...modelsData,
  {
    name: "Experience Tesla",
    id: "experiencetesla",
    image: null,
    video:
      "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4",
    textColor: "white",
    price: "Schedule a Demo Drive Today",
  },
  {
    name: "Solar Roof",
    id: "solarroof",
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D",
    video: null,
    textColor: "Black",
    price: "Price info for Solar Roof",
  },
  {
    name: "Solar Panels",
    id: "solarpanels",
    image: "url_to_solar_panels_image",
    video: null,
    textColor: "black",
    price: "Price info for Solar Panels",
  },
  {
    name: "Powerwall",
    id: "powerwall",
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg",
    video: null,
    textColor: "black",
    price: null,
  },
  {
    name: "Accessories",
    id: "accessories",
    image:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg",
    video: null,
    textColor: "black",
    price: null,
  },
];
