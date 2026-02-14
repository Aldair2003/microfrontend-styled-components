export const mfConfig = {
  name: "moduleUser",
  exposes: {
    "./User": "./src/User.tsx",
  },
  shared: ["react", "react-dom", "styled-components"],
  dts: false,
};
