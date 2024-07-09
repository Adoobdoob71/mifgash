import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";

export default function useIndex() {
  const { colors, dark } = useThemeStore();

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
    profileDetails: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
  });

  return {
    styles,
    colors,
    dark,
  };
}
