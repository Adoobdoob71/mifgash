import { FC, ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  Switch,
  Text,
  View,
  ViewStyle,
} from "react-native";
import useIndex from "./useIndex";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BASE_SIZE } from "../../../../utils/constants";

export interface OptionType {
  title: string;
  description?: string;
  icon?: IconProp;
  onPress?: () => void;
  componentEnd?: ReactNode;
}

interface Props extends OptionType {
  style?: StyleProp<ViewStyle>;
}

const Option: FC<Props> = ({
  icon,
  title,
  description,
  style,
  onPress,
  componentEnd,
}) => {
  const { styles, colors } = useIndex();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.optionWrapper,
        style,
        { opacity: pressed ? 0.5 : 1 },
      ]}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          color={colors.secondaryText}
          size={8 * BASE_SIZE}
          style={{ marginEnd: 8 * BASE_SIZE }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionDescription}>{description}</Text>
      </View>
      {onPress && (
        <FontAwesomeIcon
          icon="chevron-right"
          color={colors.secondaryText}
          size={8 * BASE_SIZE}
        />
      )}
      {componentEnd}
    </Pressable>
  );
};

export default Option;
