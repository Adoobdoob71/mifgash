import { StatusBar } from "react-native";
import { create } from "zustand";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#1371F7",
    accent: "#f79913",
    backgroundColor: "#ececec",
    cardColor: "#fff",
    text: "#000",
    secondaryText: "#5f5f5f",
    placeholder: "#757575",
    onPrimary: "#fff",
    border: "#e0e0e0",
    onTransparentBackground: "#c0c0c0",
    tag: "#fff",
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#1371F7",
    accent: "#f79913",
    backgroundColor: "#121212",
    cardColor: "#232323",
    text: "#fff",
    secondaryText: "#c0c0c0",
    placeholder: "#757575",
    onPrimary: "#fff",
    border: "#404040",
    onTransparentBackground: "#c0c0c0",
    tag: "#353535",
  },
};

type State = {
  dark: boolean;
  colors: {
    primary: string;
    accent: string;
    backgroundColor: string;
    cardColor: string;
    text: string;
    secondaryText: string;
    placeholder: string;
    onPrimary: string;
    border: string;
    onTransparentBackground: string;
    tag: string;
  };
};

type Action = {
  toggleTheme: () => void;
};

StatusBar.setBarStyle("light-content");

const useThemeStore = create<State & Action>(set => ({
  dark: true,
  colors: {
    primary: darkTheme.colors.primary,
    accent: darkTheme.colors.accent,
    backgroundColor: darkTheme.colors.backgroundColor,
    cardColor: darkTheme.colors.cardColor,
    text: darkTheme.colors.text,
    secondaryText: darkTheme.colors.secondaryText,
    placeholder: darkTheme.colors.placeholder,
    onPrimary: darkTheme.colors.onPrimary,
    border: darkTheme.colors.border,
    onTransparentBackground: darkTheme.colors.onTransparentBackground,
    tag: darkTheme.colors.tag,
  },
  toggleTheme: () =>
    set(state => {
      StatusBar.setBarStyle(!state.dark ? "light-content" : "dark-content");
      return {
        colors: state.dark ? lightTheme.colors : darkTheme.colors,
        dark: !state.dark,
      };
    }),
}));

export { useThemeStore, lightTheme, darkTheme };
