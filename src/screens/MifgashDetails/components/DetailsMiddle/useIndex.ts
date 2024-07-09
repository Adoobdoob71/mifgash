import { Linking, Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useThemeStore } from "../../../../zustand/theme";
import { BASE_SIZE } from "../../../../utils/constants";

export default function useIndex() {
  const { colors, dark } = useThemeStore();
  const navigation = useNavigation();

  const openInMaps = (latitude: number, longitude: number) => {
    const scheme = Platform.select({
      ios: "maps://0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${latitude},${longitude}`;
    const label = "Burger with friends!";
    const url =
      Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`,
      }) ?? "";

    Linking.openURL(url);
  };

  const styles = StyleSheet.create({
    mifgashTimeAndPlaceWrapper: {
      paddingHorizontal: 12 * BASE_SIZE,
      marginTop: 12 * BASE_SIZE,
    },
    mifgashTPDetails: {
      flexDirection: "row",
      alignItems: "center",
    },
    mifgashTPDetailsIcon: {
      backgroundColor: `${colors.primary}25`,
      padding: 7 * BASE_SIZE,
      borderRadius: 6 * BASE_SIZE,
      marginEnd: 8 * BASE_SIZE,
    },
    mifgashTPDetailsTextWrapper: {
      flex: 1,
    },
    mifgashText: {
      fontSize: 8 * BASE_SIZE,
      color: colors.secondaryText,
      fontWeight: "600",
      marginEnd: 4 * BASE_SIZE,
    },
  });

  return { styles, colors, navigation, dark, openInMaps };
}
