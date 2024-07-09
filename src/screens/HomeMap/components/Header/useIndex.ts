import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { BASE_SIZE } from "../../../../utils/constants";
import { RefObject, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

export default function useIndex(
  searchSheetRef: RefObject<BottomSheetModalMethods>,
) {
  const [searchQuery, setSearchQuery] = useState("");

  const { top } = useSafeAreaInsets();
  const { colors } = useThemeStore();

  const onFocus = () => searchSheetRef.current?.expand();

  const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: colors.cardColor,
    },
    searchBarWrapper: {
      width: "100%",
      height: top + 41 * BASE_SIZE,
      padding: BASE_SIZE * 10,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.cardColor,
      alignSelf: "center",
      paddingHorizontal: 10 * BASE_SIZE,
      paddingVertical: 6 * BASE_SIZE,
      width: "90%",
      borderRadius: 6 * BASE_SIZE,
      opacity: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    searchTextInput: {
      flex: 1,
      color: colors.text,
      fontSize: 9 * BASE_SIZE,
      fontWeight: "500",
    },
  });

  return {
    styles,
    colors,
    onFocus,
  };
}
