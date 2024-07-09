import { FC } from "react";
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import useIndex from "./useIndex";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BASE_SIZE } from "../../utils/constants";

interface Props {
  onPress: () => void;
  text: string;
  mode: "filled" | "text";
  color?: string;
  fontSize?: number;
  icon?: IconProp;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<Props> = ({
  onPress,
  text,
  mode,
  color,
  fontSize,
  icon,
  textStyle,
  style,
}) => {
  const { styles, colors } = useIndex();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonWrapper,
        mode === "filled" && styles.buttonModeFilled,
        {
          opacity: pressed ? 0.75 : 1,
          backgroundColor:
            mode === "filled"
              ? color
                ? color
                : colors.primary
              : "transparent",
        },
        style,
      ]}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size={fontSize ?? 10 * BASE_SIZE}
          color={
            color
              ? color
              : mode === "filled"
              ? colors.onPrimary
              : colors.primary
          }
          style={{ marginEnd: 3 * BASE_SIZE }}
        />
      )}
      <Text
        style={[
          styles.buttonText,
          mode === "filled"
            ? styles.buttonModeFilled_Text
            : styles.buttonModeText_Text,
          { fontSize: fontSize },
          textStyle,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
