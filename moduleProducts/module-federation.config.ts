export const mfConfig = {
  name: "moduleProducts",
  exposes: {
    "./Products": "./src/Products.tsx",
  },
  shared: ["react", "react-dom", "styled-components"],
  dts: false,
};
