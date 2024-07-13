import { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Option from "../Option";
import useIndex from "./useIndex";

interface Props {
  options: string[];
  style?: StyleProp<ViewStyle>;
}

const OptionGroup: FC<Props> = ({ options, style }) => {
  const { colors, styles } = useIndex();

  return (
    <View style={[styles.optionGroupWrapper, style]}>
      {options.map((item, index) => (
        <Option
          title="My Profile"
          description="myprofile@gmail.com"
          key={index}
        />
      ))}
    </View>
  );
};

export default OptionGroup;
