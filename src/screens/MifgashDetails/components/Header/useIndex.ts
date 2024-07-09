import { StyleSheet } from "react-native";
import { BASE_SIZE, SCREEN_HEIGHT } from "../../../../utils/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeStore } from "../../../../zustand/theme";
import { useNavigation } from "@react-navigation/native";

export default function useIndex() {
  const { top } = useSafeAreaInsets();

  const { colors, dark } = useThemeStore();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    mifgashHeader: {
      height: 0.4 * SCREEN_HEIGHT,
    },
    mifgashImage: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: 0.4 * SCREEN_HEIGHT,
    },
    mifgashHeaderButtons: {
      paddingTop: top,
      paddingHorizontal: 8 * BASE_SIZE,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return { styles, navigation, colors, dark };
}
