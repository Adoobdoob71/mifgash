import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { BASE_SIZE } from "../../../../utils/constants";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    profileTopWrapper: {
      backgroundColor: colors.backgroundColor,
      paddingTop: 18 * BASE_SIZE,
      zIndex: -1,
    },
    profileTopTitleWrapper: {
      marginTop: 4 * BASE_SIZE,
      paddingHorizontal: 12 * BASE_SIZE,
    },
    profileTopName: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 12 * BASE_SIZE,
      marginBottom: 4 * BASE_SIZE,
    },
    profileTopLocation: {
      color: colors.secondaryText,
      fontWeight: "600",
      fontSize: 10 * BASE_SIZE,
    },
    profileTopStats: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8 * BASE_SIZE,
    },
    profileTopStatWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginEnd: 10 * BASE_SIZE,
    },
    profileTopStatsText: {
      color: colors.text,
      fontWeight: "600",
      fontSize: 7 * BASE_SIZE,
    },
    profileConnectButton: {
      marginHorizontal: 12 * BASE_SIZE,
      marginTop: 12 * BASE_SIZE,
      marginBottom: 4 * BASE_SIZE,
    },
    profileHobbiesWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8 * BASE_SIZE,
    },
  });

  return { styles, colors };
}
