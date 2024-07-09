import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    groupCardWrapper: {
      backgroundColor: colors.backgroundColor,
      borderRadius: 8 * BASE_SIZE,
      width: 150 * BASE_SIZE,
      height: 100 * BASE_SIZE,
    },
    groupCardBackgroundImage: {
      flex: 1,
      borderRadius: 8 * BASE_SIZE,
    },
    groupCardInfoWrapper: {
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.65)",
      width: 150 * BASE_SIZE,
      height: 100 * BASE_SIZE,
      borderRadius: 8 * BASE_SIZE,
      paddingHorizontal: 8 * BASE_SIZE,
      paddingVertical: 4 * BASE_SIZE,
    },
    groupCardTop: {
      paddingTop: 4 * BASE_SIZE,
      paddingHorizontal: 2 * BASE_SIZE,
    },
    groupCardName: {
      color: colors.onPrimary,
      fontWeight: "600",
      fontSize: 12 * BASE_SIZE,
      marginBottom: 3 * BASE_SIZE,
    },
    groupCardBottom: {
      marginTop: "auto",
      paddingBottom: 2 * BASE_SIZE,
    },
    groupCardMembers: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5 * BASE_SIZE,
    },
    groupCardMembersImageWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    groupCardMembersImage: {
      height: 13 * BASE_SIZE,
      width: 13 * BASE_SIZE,
      borderRadius: 6.5 * BASE_SIZE,
    },
    groupCardMembersText: {
      color: colors.onTransparentBackground,
      fontSize: 7 * BASE_SIZE,
      fontWeight: "600",
      marginStart: 6 * BASE_SIZE,
    },
    groupCardTagList: {
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return { styles, colors };
}
