import { DefaultTheme } from "@react-navigation/native";
import { GColors } from ".";

const whiteTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: GColors.white,
  },
};

export { whiteTheme };
