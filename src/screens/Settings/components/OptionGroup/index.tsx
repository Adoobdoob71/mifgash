import { FC } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import Option from "../Option";
import useIndex from "./useIndex";
import { BASE_SIZE } from "../../../../utils/constants";

interface Props {
  title: string;
  options: string[];
  style?: StyleProp<ViewStyle>;
}

const OptionGroup: FC<Props> = ({ options, title, style }) => {
  const { colors, styles } = useIndex();

  return (
    <View style={[styles.optionGroupWrapper, style]}>
      <Text style={styles.optionGroupTitle}>{title}</Text>
      {options.map((item, index) => (
        <View>
          {index !== 0 && <View style={styles.divider}></View>}
          <Option
            title="Toggle dark theme"
            // @ts-ignore
            icon="fa-regular fa-clock"
            description="Change the app's appearnce"
            key={index}
          />
        </View>
      ))}
    </View>
  );
};

export default OptionGroup;
