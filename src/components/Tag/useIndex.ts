import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";
import { useState } from "react";

export default function useIndex() {
  const [active, setActive] = useState(false);

  const { colors } = useThemeStore();

  const toggleTag = () => setActive(active => !active);

  const styles = StyleSheet.create({
    tagWrapper: {
      paddingHorizontal: 4 * BASE_SIZE,
      paddingVertical: 2 * BASE_SIZE,
      borderWidth: 0.75 * BASE_SIZE,
      borderColor: colors.border,
      borderRadius: 4 * BASE_SIZE,
    },
    tagWrapperActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    tagText: {
      color: colors.text,
      fontSize: 6 * BASE_SIZE,
    },
    tagTextActive: {
      color: colors.onPrimary,
    },
  });

  return { colors, styles, active, toggleTag };
}
