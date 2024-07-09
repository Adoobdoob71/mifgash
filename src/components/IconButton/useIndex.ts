import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";

export default function useIndex(size?: number, color?: string) {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    aura: {
      padding: 4 * BASE_SIZE,
      borderRadius: 6 * BASE_SIZE,
    },
  });
  return {
    colors,
    styles,
  };
}
