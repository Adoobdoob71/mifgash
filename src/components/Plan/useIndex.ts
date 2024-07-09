import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";
import { useState } from "react";

export default function useIndex() {
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(null);

  const { colors } = useThemeStore();

  const updateActiveStage = (index: number) =>
    setActiveStageIndex(activeStageIndex =>
      index === activeStageIndex ? null : index,
    );

  const styles = StyleSheet.create({
    planWrapper: {},
    stageWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8 * BASE_SIZE,
    },
    stageDotWrapper: {
      marginEnd: 12 * BASE_SIZE,
    },
    stageDot: {
      width: 12 * BASE_SIZE,
      height: 12 * BASE_SIZE,
      backgroundColor: colors.cardColor,
      borderRadius: 6 * BASE_SIZE,
      borderWidth: 1.5 * BASE_SIZE,
      borderColor: colors.border,
    },
    stageCardWrapper: {
      flexDirection: "row",
      backgroundColor: colors.cardColor,
      borderRadius: 8 * BASE_SIZE,
      width: "100%",
      paddingVertical: 6 * BASE_SIZE,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
    },
    stageInfoWrapper: {
      flex: 1,
      paddingHorizontal: 12 * BASE_SIZE,
    },
    stageInfoTitleTimeWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 4 * BASE_SIZE,
    },
    stageInfoTitle: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 8 * BASE_SIZE,
    },
    stageInfoTime: {
      color: colors.secondaryText,
      fontWeight: "600",
      fontSize: 6 * BASE_SIZE,
      marginStart: 4 * BASE_SIZE,
    },
    stageInfoDescription: {
      color: colors.secondaryText,
      fontWeight: "600",
      fontSize: 6 * BASE_SIZE,
    },
  });

  return { styles, colors, activeStageIndex, updateActiveStage };
}
