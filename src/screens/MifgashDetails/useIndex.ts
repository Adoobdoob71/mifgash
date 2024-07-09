import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE, SCREEN_WIDTH } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import LottieView from "lottie-react-native";

export default function useIndex() {
  const { colors, dark } = useThemeStore();
  const navigation = useNavigation();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const animationRef = useRef<LottieView>(null);

  const openSuccessfulJoinSheet = () => {
    bottomSheetRef.current?.expand();
    animationRef.current?.resume();
  };

  const onClose = () => {
    animationRef.current?.pause();
  };

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
    mifgashDetails: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
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
    mifgashSuccessfulJoin: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    mifgashSuccessfulJoinSheet: {
      backgroundColor: colors.cardColor,
    },
    mifgashSuccessfulJoinHandle: {
      backgroundColor: colors.primary,
    },
    mifgashSuccessfulJoinText: {
      position: "absolute",
      bottom: 20 * BASE_SIZE,
      color: colors.secondaryText,
      fontWeight: "600",
      fontSize: 8 * BASE_SIZE,
    },
  });

  return {
    styles,
    navigation,
    dark,
    bottomSheetRef,
    animationRef,
    openSuccessfulJoinSheet,
    onClose,
  };
}
