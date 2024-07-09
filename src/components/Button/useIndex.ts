import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    buttonWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonModeFilled: {
      backgroundColor: colors.primary,
      borderRadius: 6 * BASE_SIZE,
      paddingHorizontal: 7 * BASE_SIZE,
      paddingVertical: 5 * BASE_SIZE,
    },
    buttonText: {
      fontSize: 10 * BASE_SIZE,
      fontWeight: "bold",
    },
    buttonModeFilled_Text: {
      color: colors.onPrimary,
    },
    buttonModeText_Text: {
      color: colors.primary,
    },
  });

  return { colors, styles };
}
