import { StyleSheet } from "react-native";
import { useThemeStore } from "../../../../zustand/theme";
import { useNavigation } from "@react-navigation/native";

export default function useIndex() {
  const { colors, toggleTheme, dark } = useThemeStore();

  const navigation = useNavigation();

  // @ts-ignore
  const goToMyProfile = () => navigation.navigate("ProfileScreen");

  const styles = StyleSheet.create({
    settingsTopWrapper: {},
  });

  return { styles, colors, navigation, goToMyProfile, toggleTheme, dark };
}
