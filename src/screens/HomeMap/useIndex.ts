import { StyleSheet, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeStore } from "../../zustand/theme";
import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function useIndex() {
  const insets = useSafeAreaInsets();

  const { colors, dark } = useThemeStore();

  const searchSheetRef = useRef<BottomSheetModal>(null);
  const searchTextInputRef = useRef<TextInput>(null);

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
    mapView: {
      flex: 1,
      paddingTop: insets.top,
    },
    safeWrapper: {
      flex: 1,
    },
  });

  return {
    styles,
    dark,
    colors,
    searchSheetRef,
    searchTextInputRef,
  };
}
