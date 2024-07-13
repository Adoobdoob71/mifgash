import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import useIndex from "./useIndex";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import SettingsTop from "./components/SettingsTop";

interface Props {}

const Settings: FC<Props> = () => {
  const { colors, styles } = useIndex();

  const navigation = useNavigation();
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.settingsTitle}>Settings</Text>
      <ScrollView contentContainerStyle={styles.settingsScrollView}>
        <SettingsTop />
      </ScrollView>
    </View>
  );
};

export default Settings;
