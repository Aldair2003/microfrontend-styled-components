export const mfConfig = {
  name: "modulePurchases",
  exposes: {
    "./Cart": "./src/Cart.tsx",
  },
  shared: ["react", "react-dom", "styled-components"],
  dts: false,
};
