import { useSharedValue } from "react-native-reanimated";
import { useThemeStore } from "../../zustand/theme";

export default function useIndex() {
  const bottomTabY = useSharedValue(0);
  const { colors } = useThemeStore();

  return { bottomTabY, colors };
}
