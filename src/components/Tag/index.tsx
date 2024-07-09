import { FC } from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import useIndex from "./useIndex";

interface Props {
  text: string;
  onPress?: () => void;
  toggle?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Tag: FC<Props> = ({ text, onPress, style, toggle, textStyle }) => {
  const { styles, colors, active, toggleTag } = useIndex();

  return (
    <Pressable
      onPress={toggleTag}
      onLongPress={onPress}
      style={({ pressed }) => [
        styles.tagWrapper,
        toggle && {
          opacity: pressed ? 0.5 : 1,
        },
        style,
        toggle && active && styles.tagWrapperActive,
      ]}>
      <Text
        style={[
          styles.tagText,
          toggle && active && styles.tagTextActive,
          textStyle,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Tag;
