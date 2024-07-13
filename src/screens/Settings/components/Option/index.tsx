import { FC } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import useIndex from "./useIndex";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BASE_SIZE } from "../../../../utils/constants";

interface Props {
  icon?: IconProp;
  title: string;
  description?: string;
  toggle?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Option: FC<Props> = ({ icon, title, description, toggle, style }) => {
  const { styles, colors } = useIndex();

  return (
    <View style={[styles.optionWrapper, style]}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          color={colors.secondaryText}
          size={8 * BASE_SIZE}
          style={{ marginEnd: 8 * BASE_SIZE }}
        />
      )}
      <View>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionDescription}>{description}</Text>
      </View>
      {/* switch component */}
    </View>
  );
};

export default Option;
