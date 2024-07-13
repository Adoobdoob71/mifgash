import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { BASE_SIZE } from "../../../../utils/constants";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    optionGroupWrapper: {
      // backgroundColor: colors.cardColor,
      marginHorizontal: 6 * BASE_SIZE,
      borderRadius: 8 * BASE_SIZE,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
    },
    optionGroupTitle: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 12 * BASE_SIZE,
      marginHorizontal: 12 * BASE_SIZE,
      marginTop: 6 * BASE_SIZE,
      marginBottom: 2 * BASE_SIZE,
    },
    divider: {
      backgroundColor: colors.secondaryText,
      height: 0.2 * BASE_SIZE,
      width: "80%",
      alignSelf: "center",
    },
  });

  return { styles, colors };
}
