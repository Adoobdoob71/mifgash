import { StyleSheet } from "react-native";

export default function useIndex() {
  const styles = StyleSheet.create({
    tagList: {},
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return {
    styles,
  };
}
