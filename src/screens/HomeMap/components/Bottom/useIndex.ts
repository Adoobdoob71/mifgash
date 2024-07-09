import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { BASE_SIZE, SCREEN_HEIGHT } from "../../../../utils/constants";
import { useThemeStore } from "../../../../zustand/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import {
  Easing,
  ReduceMotion,
  SharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function useIndex(
  searchSheetRef: RefObject<BottomSheetModalMethods>,
  searchTextInputRef: RefObject<TextInput>,
  bottomTabY: SharedValue<number>,
) {
  const [loading, setLoading] = useState(true);

  const { top } = useSafeAreaInsets();

  const searchSheetFullValue = useMemo(
    () => SCREEN_HEIGHT - (40 * BASE_SIZE + top),
    [SCREEN_HEIGHT, top, BASE_SIZE],
  );
  const searchSheetStages = ["32%", searchSheetFullValue];

  const { colors, toggleTheme } = useThemeStore();
  const navigation = useNavigation();

  useEffect(() => {
    searchSheetRef.current?.present();
  }, []);

  const onAnimate = (fromIndex: number, toIndex: number) => {
    if (fromIndex == 1 && toIndex == 0) {
      searchTextInputRef.current?.blur();
      bottomTabY.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.quad),
        reduceMotion: ReduceMotion.System,
      });
      return;
    }
    if (fromIndex == 0 && toIndex == 1) {
      searchTextInputRef.current?.focus();
      bottomTabY.value = withTiming(45 * BASE_SIZE, {
        duration: 300,
        easing: Easing.out(Easing.quad),
        reduceMotion: ReduceMotion.System,
      });
    }
  };

  // @ts-ignore
  const mifgashCardOnPress = () => navigation.navigate("MifgashDetails");

  const styles = StyleSheet.create({
    searchSheetWrapper: {
      borderRadius: 16 * BASE_SIZE,
      backgroundColor: colors.cardColor,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    searchSheetHeader: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20 * BASE_SIZE,
      paddingTop: 12 * BASE_SIZE,
    },
    headerTitle: {
      fontSize: 17 * BASE_SIZE,
      color: colors.text,
      fontWeight: "600",
      marginEnd: 6 * BASE_SIZE,
    },
    activityIndicator: {
      alignSelf: "flex-end",
    },
    filterButton: {
      marginStart: "auto",
    },
    row: {
      alignItems: "center",
    },
    mifgashCardList: {
      flex: 1,
    },
    mifgashCardListContent: {
      alignItems: "center",
    },
  });
  return {
    loading,
    styles,
    toggleTheme,
    searchSheetStages,
    onAnimate,
    mifgashCardOnPress,
  };
}
