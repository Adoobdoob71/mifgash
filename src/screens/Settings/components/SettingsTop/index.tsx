import { FC } from "react";
import { Switch, View } from "react-native";
import Option from "../Option";
import OptionGroup from "../OptionGroup";
import { BASE_SIZE } from "../../../../utils/constants";
import useIndex from "./useIndex";

interface Props {}

const SettingsTop: FC<Props> = () => {
  const { goToMyProfile, toggleTheme, dark, colors } = useIndex();

  return (
    <View>
      <OptionGroup
        options={[
          {
            title: "My profile",
            description: "bruh@gmail.com",
            icon: "user",
            onPress: goToMyProfile,
          },
        ]}
        title="Account"
      />
      <OptionGroup
        options={[
          {
            title: "Private account",
            description: "Make my account private",
            icon: "user",
          },
          {
            title: "Private account",
            description: "Make my account private",
            icon: "user",
          },
        ]}
        title="Privacy"
        style={{ marginTop: 8 * BASE_SIZE }}
      />
      <OptionGroup
        options={[
          {
            title: "Toggle theme",
            description: "toggle light and dark themes",
            icon: "user",
            componentEnd: (
              <Switch
                value={dark}
                onChange={toggleTheme}
                trackColor={{ true: colors.primary }}
                style={{ marginStart: "auto" }}
              />
            ),
          },
        ]}
        title="Appearance"
        style={{ marginTop: 8 * BASE_SIZE }}
      />
    </View>
  );
};

export default SettingsTop;
