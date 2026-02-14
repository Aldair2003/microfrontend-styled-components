export const mfConfig = {
  name: "main",
  remotes: {
    moduleProducts: "moduleProducts@http://localhost:3002/mf-manifest.json",
    moduleUser: "moduleUser@http://localhost:3001/mf-manifest.json",
    modulePurchases: "modulePurchases@http://localhost:3003/mf-manifest.json",
  },
  shared: ["react", "react-dom", "styled-components"],
};
