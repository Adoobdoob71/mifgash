import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { BASE_SIZE } from "../../../../utils/constants";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    optionWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12 * BASE_SIZE,
      marginBottom: 10 * BASE_SIZE,
    },
    optionTitle: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 8 * BASE_SIZE,
      marginBottom: 1.5 * BASE_SIZE,
    },
    optionDescription: {
      color: colors.secondaryText,
      fontWeight: "500",
      fontSize: 6 * BASE_SIZE,
    },
  });

  return { styles, colors };
}
