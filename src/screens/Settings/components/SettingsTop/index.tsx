import { FC } from "react";
import { View } from "react-native";
import Option from "../Option";
import OptionGroup from "../OptionGroup";
import { BASE_SIZE } from "../../../../utils/constants";

interface Props {}

const SettingsTop: FC<Props> = () => {
  return (
    <View>
      <OptionGroup options={["1", "2"]} title="Account" />
      <OptionGroup
        options={["1", "2", "3"]}
        title="Privacy"
        style={{ marginTop: 8 * BASE_SIZE }}
      />
      <OptionGroup
        options={["1"]}
        title="Appearance"
        style={{ marginTop: 8 * BASE_SIZE }}
      />
    </View>
  );
};

export default SettingsTop;
