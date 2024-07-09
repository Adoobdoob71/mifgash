import { Dimensions } from "react-native";

const colorSchemeLight = {
  primary: "#FFEE8F",
};

const colorSchemeDark = {
  primary: "#FFEE8F",
};

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const BASE_SIZE = SCREEN_HEIGHT / SCREEN_WIDTH;

export {
  colorSchemeDark,
  colorSchemeLight,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  BASE_SIZE,
};
