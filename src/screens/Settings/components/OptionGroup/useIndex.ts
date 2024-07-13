import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { BASE_SIZE } from "../../../../utils/constants";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    optionGroupWrapper: {
      backgroundColor: colors.cardColor,
      marginHorizontal: 6 * BASE_SIZE,
      borderRadius: 8 * BASE_SIZE,
    },
  });

  return { styles, colors };
}
