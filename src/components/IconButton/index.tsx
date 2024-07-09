import { FC } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BlurView } from "@react-native-community/blur";

import useIndex from "./useIndex";
import { BASE_SIZE } from "../../utils/constants";

interface Props {
  iconName: IconProp;
  onPress: () => void;
  onLongPress?: () => void;
  color?: string;
  size?: number;
  aura?: boolean;
  style?: StyleProp<ViewStyle>;
}

const IconButton: FC<Props> = ({
  iconName,
  onPress,
  onLongPress,
  color,
  size,
  aura,
  style,
}) => {
  const { colors, styles } = useIndex(size, color);
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [style, { opacity: pressed ? 0.5 : 1 }]}>
      {aura ? (
        <BlurView blurType="thinMaterialDark" style={styles.aura}>
          <FontAwesomeIcon
            icon={iconName}
            color={aura ? colors.onPrimary : colors.text}
            size={size ?? 9.5 * BASE_SIZE}
          />
        </BlurView>
      ) : (
        <FontAwesomeIcon
          icon={iconName}
          color={color ?? colors.text}
          size={size ?? 9.5 * BASE_SIZE}
        />
      )}
    </Pressable>
  );
};

export default IconButton;
