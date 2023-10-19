// sectionsData.js
import { modelsData } from "./modelsData";

// Extend the modelsData with additional sections to cover other Tesla products and experiences
export const sectionsData = [
  ...modelsData, // Spread the modelsData to include all Tesla car models
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
    name: "Solar Panels",
    id: "solarpanels",
    image: "url_to_solar_panels_image",
    video: null,
    textColor: "black",
    price: "Price info for Solar Panels",
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

/* 
NOTES:

- This module, `sectionsData.js`, is meant to provide structured data for various sections of a Tesla-related website or application.
  
- The data starts by including all the Tesla car models (from the `modelsData` module) and then adds other sections related to different Tesla products and experiences.

- Each section object has properties like `name`, `id`, `image`, `video`, `textColor`, and `price` to cater to the needs of rendering components. The use of these properties would likely vary depending on the section type (e.g., car model vs. accessories).

- Some of the data entries, particularly for images and prices, are placeholders and should be updated with actual values when available.

- The consistent structure across all sections facilitates easy mapping through the data and rendering of components.
*/