import { StyleSheet } from "react-native";
import { BASE_SIZE, SCREEN_HEIGHT } from "../../../../utils/constants";
import { useThemeStore } from "../../../../zustand/theme";
import { useNavigation } from "@react-navigation/native";

export default function useIndex() {
  const { colors, dark } = useThemeStore();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    mifgashTitleWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12 * BASE_SIZE,
      paddingBottom: 10 * BASE_SIZE,
    },
    mifgashTitleDetails: {},
    mifgashTitle: {
      fontSize: 15 * BASE_SIZE,
      fontWeight: "bold",
      color: colors.text,
    },
    mifgashHostWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5 * BASE_SIZE,
    },
    mifgashHostImage: {
      width: 14 * BASE_SIZE,
      height: 14 * BASE_SIZE,
      borderRadius: 7 * BASE_SIZE,
      marginEnd: 4 * BASE_SIZE,
    },
    mifgashHostName: {
      fontSize: 8 * BASE_SIZE,
      fontWeight: "600",
      color: colors.secondaryText,
      marginEnd: 4 * BASE_SIZE,
    },
    mifgashGoingWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 12 * BASE_SIZE,
    },
    mifgashGoingDetailsWrapper: {},
    mifgashAllGoingWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    mifgashText: {
      fontSize: 8 * BASE_SIZE,
      color: colors.secondaryText,
      fontWeight: "600",
      marginEnd: 4 * BASE_SIZE,
    },
    mifgashAllGoingAvatars: {
      flexDirection: "row",
      alignItems: "center",
    },
    goingAvatar: {
      height: 13 * BASE_SIZE,
      width: 13 * BASE_SIZE,
      borderRadius: 6.5 * BASE_SIZE,
      marginEnd: -2.25 * BASE_SIZE,
    },
    mifgashGoingYouKnowWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return { styles, navigation, colors, dark };
}
