import { StyleSheet } from "react-native";
import { BASE_SIZE } from "../../../../utils/constants";
import { useThemeStore } from "../../../../zustand/theme";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    tabBarWrapper: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.cardColor,
      paddingBottom: 16 * BASE_SIZE,
      paddingTop: 6 * BASE_SIZE,
      paddingHorizontal: 15 * BASE_SIZE,
    },
    tabBarButton: {
      padding: 5 * BASE_SIZE,
      backgroundColor: colors.primary,
      borderRadius: 6 * BASE_SIZE,
    },
    tabBarShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,

      elevation: 7,
    },
  });

  return { colors, styles };
}
