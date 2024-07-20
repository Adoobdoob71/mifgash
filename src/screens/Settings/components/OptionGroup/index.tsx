import { FC } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import Option, { OptionType } from "../Option";
import useIndex from "./useIndex";
import { BASE_SIZE } from "../../../../utils/constants";

interface Props {
  title: string;
  options: OptionType[];
  style?: StyleProp<ViewStyle>;
}

const OptionGroup: FC<Props> = ({ options, title, style }) => {
  const { colors, styles } = useIndex();

  return (
    <View style={[styles.optionGroupWrapper, style]}>
      <Text style={styles.optionGroupTitle}>{title}</Text>
      <View style={styles.optionsWrapper}>
        {options.map((item, index) => (
          <View>
            {/* {index !== 0 && <View style={styles.divider}></View>} */}
            <Option {...item} key={index} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default OptionGroup;
