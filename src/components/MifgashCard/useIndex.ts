import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";
import { useState } from "react";

export default function useIndex() {
  const [bookmarked, setBookmarked] = useState(false);
  const [going, setGoing] = useState(false);

  const { colors } = useThemeStore();

  const toggleBookmark = () => setBookmarked(bookmarked => !bookmarked);

  const styles = StyleSheet.create({
    mifgashCardWrapper: {
      backgroundColor: colors.backgroundColor,
      borderRadius: 8 * BASE_SIZE,
      width: 180 * BASE_SIZE,
      height: 140 * BASE_SIZE,
    },
    mifgashCardBackgroundImage: {
      flex: 1,
      borderRadius: 8 * BASE_SIZE,
    },
    mifgashCardInfoWrapper: {
      width: 180 * BASE_SIZE,
      height: 140 * BASE_SIZE,
      position: "absolute",
      backgroundColor: "rgba(0,0,0, 0.7)",
      borderRadius: 8 * BASE_SIZE,
    },
    mifgashCardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 6 * BASE_SIZE,
      paddingHorizontal: 6 * BASE_SIZE,
    },
    mifgashGroupWrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.cardColor,
      borderRadius: 8 * BASE_SIZE,
      padding: 2 * BASE_SIZE,
    },
    mifgashGroupImage: {
      width: 12 * BASE_SIZE,
      height: 12 * BASE_SIZE,
      borderRadius: 6 * BASE_SIZE,
    },
    mifgashGroupName: {
      color: colors.text,
      fontWeight: "bold",
      fontSize: 6 * BASE_SIZE,
      marginHorizontal: 4 * BASE_SIZE,
    },
    upcomingStatusWrapper: {
      borderRadius: 8 * BASE_SIZE,
      paddingVertical: 2 * BASE_SIZE,
      paddingHorizontal: 4 * BASE_SIZE,
    },
    upcomingStatus: {
      fontSize: 6 * BASE_SIZE,
      fontWeight: "bold",
    },
    mifgashCardMiddle: {
      flex: 1,
      marginTop: 6 * BASE_SIZE,
      paddingHorizontal: 12 * BASE_SIZE,
    },
    mifgashCardTitle: {
      fontSize: 15 * BASE_SIZE,
      color: colors.onPrimary,
      fontWeight: "bold",
      marginBottom: 2 * BASE_SIZE,
    },
    mifgashCardShortDesc: {
      color: colors.onTransparentBackground,
      fontWeight: "600",
      width: "75%",
      fontSize: 7 * BASE_SIZE,
      marginTop: 4 * BASE_SIZE,
    },
    mifgashCardAvatars: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: "auto",
    },
    goingAvatar: {
      height: 13 * BASE_SIZE,
      width: 13 * BASE_SIZE,
      borderRadius: 6.5 * BASE_SIZE,
      borderWidth: 0.5 * BASE_SIZE,
      borderColor: "transparent",
    },
    mifgashCardGoingNumber: {
      color: colors.onTransparentBackground,
      fontWeight: "600",
      fontSize: 7 * BASE_SIZE,
      marginStart: 4 * BASE_SIZE,
    },
    mifgashCardFooter: {
      marginTop: "auto",
    },
    mifgashCardFooterDetails: {
      paddingHorizontal: 12 * BASE_SIZE,
      paddingBottom: 6 * BASE_SIZE,
    },
    mifgashCardLocationWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4 * BASE_SIZE,
    },
    mifgashCardLocation: {
      fontSize: 7 * BASE_SIZE,
      fontWeight: "bold",
      color: colors.onTransparentBackground,
      marginStart: 4 * BASE_SIZE,
    },
    mifgashCardTimeWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4 * BASE_SIZE,
    },
    mifgashCardTime: {
      fontSize: 7 * BASE_SIZE,
      fontWeight: "bold",
      color: colors.onTransparentBackground,
      marginStart: 4 * BASE_SIZE,
    },
    mifgashCardTagList: {
      marginBottom: 8 * BASE_SIZE,
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return { styles, colors, bookmarked, going, toggleBookmark };
}
