import { StyleSheet } from "react-native";
import { useThemeStore } from "../../zustand/theme";

export default function useIndex() {
  const { colors, dark } = useThemeStore();

  const styles = StyleSheet.create({});

  return { styles, colors, dark };
}
