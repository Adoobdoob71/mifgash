import { FC } from "react";
import { View } from "react-native";
import Option from "../Option";
import OptionGroup from "../OptionGroup";

interface Props {}

const SettingsTop: FC<Props> = () => {
  return (
    <View>
      <OptionGroup options={["1", "2", "3"]} />
    </View>
  );
};

export default SettingsTop;
