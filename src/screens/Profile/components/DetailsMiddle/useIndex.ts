import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { BASE_SIZE } from "../../../../utils/constants";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    profileMiddleWrapper: {
      marginTop: 8 * BASE_SIZE,
    },
    profileGroupsWrapper: {
      marginBottom: 12 * BASE_SIZE,
    },
    profileGroupsTitle: {
      color: colors.text,
      fontSize: 11 * BASE_SIZE,
      fontWeight: "600",
      paddingHorizontal: 12 * BASE_SIZE,
      marginBottom: 8 * BASE_SIZE,
    },
    profileGroupsList: {},
    profilePastMifgashimWrapper: {
      marginBottom: 16 * BASE_SIZE,
    },
    profilePastMifgashimTitle: {
      color: colors.text,
      fontSize: 11 * BASE_SIZE,
      fontWeight: "600",
      paddingHorizontal: 12 * BASE_SIZE,
      marginBottom: 8 * BASE_SIZE,
    },
    profilePastMifgashimList: {},
  });

  return { styles, colors };
}
