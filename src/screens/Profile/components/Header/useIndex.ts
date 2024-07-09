import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { useNavigation } from "@react-navigation/native";
import { BASE_SIZE, SCREEN_HEIGHT } from "../../../../utils/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function useIndex() {
  const { colors } = useThemeStore();

  const navigation = useNavigation();

  const { top } = useSafeAreaInsets();

  const styles = StyleSheet.create({
    profileHeader: {
      height: 0.25 * SCREEN_HEIGHT,
    },
    profileBackgroundImage: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: 0.25 * SCREEN_HEIGHT,
    },
    profileHeaderButtons: {
      paddingTop: top,
      paddingHorizontal: 8 * BASE_SIZE,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
    },
    profileImageWrapper: {
      position: "absolute",
      bottom: -18 * BASE_SIZE,
      zIndex: 1,
      marginStart: 12 * BASE_SIZE,
      width: 48 * BASE_SIZE,
      height: 48 * BASE_SIZE,
      borderWidth: 2 * BASE_SIZE,
      borderColor: colors.backgroundColor,
      borderRadius: 24 * BASE_SIZE,
    },
    profileImage: {
      flex: 1,
      borderRadius: 24 * BASE_SIZE,
    },
    profileHeaderFooter: {
      height: 8 * BASE_SIZE,
      marginTop: "auto",
      backgroundColor: colors.backgroundColor,
      width: "100%",
      borderTopStartRadius: 8 * BASE_SIZE,
      borderTopEndRadius: 8 * BASE_SIZE,
    },
  });
  return { colors, styles, navigation };
}
