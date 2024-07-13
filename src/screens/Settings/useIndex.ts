import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function useIndex() {
  const { colors } = useThemeStore();

  const { top } = useSafeAreaInsets();

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      paddingTop: top,
    },
    settingsTitle: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 16 * BASE_SIZE,
      marginStart: 16 * BASE_SIZE,
    },
  });

  return { colors, styles };
}
