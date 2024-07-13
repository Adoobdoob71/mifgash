import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";

export default function useIndex() {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    settingsTopWrapper: {},
  });

  return { styles, colors };
}
