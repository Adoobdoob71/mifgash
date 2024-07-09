import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { BASE_SIZE } from "../../../../utils/constants";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    descWrapper: {
      marginTop: 12 * BASE_SIZE,
      paddingHorizontal: 12 * BASE_SIZE,
    },
    secondaryTitle: {
      fontSize: 10 * BASE_SIZE,
      color: colors.text,
      fontWeight: "bold",
    },
    shortDescText: {
      color: colors.secondaryText,
      fontWeight: "500",
      fontSize: 8 * BASE_SIZE,
      marginTop: 3 * BASE_SIZE,
    },
    planWrapper: {
      marginTop: 12 * BASE_SIZE,
    },
  });

  return { styles, colors };
}
