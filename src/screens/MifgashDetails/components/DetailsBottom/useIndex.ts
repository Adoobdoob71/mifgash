import { Linking, Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  BASE_SIZE,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../../utils/constants";
import { useThemeStore } from "../../../../zustand/theme";

export default function useIndex() {
  const { top } = useSafeAreaInsets();

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
    mifgashPlace: {
      marginTop: 12 * BASE_SIZE,
      marginBottom: 44 * BASE_SIZE,
    },
    mifgashPlaceTitle: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 10 * BASE_SIZE,
      marginStart: 12 * BASE_SIZE,
    },
    mifgashMap: {
      width: 0.9 * SCREEN_WIDTH,
      height: 0.3 * SCREEN_HEIGHT,
      borderRadius: 8 * BASE_SIZE,
      alignSelf: "center",
      marginTop: 8 * BASE_SIZE,
    },
    mifgashJoinButton: {
      position: "absolute",
      bottom: 16 * BASE_SIZE,
      alignSelf: "center",
      width: 0.92 * SCREEN_WIDTH,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  });

  return { styles, colors, navigation, dark, openInMaps };
}
