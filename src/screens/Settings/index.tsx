import { FC } from "react";
import { View } from "react-native";
import useIndex from "./useIndex";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

interface Props {}

const Settings: FC<Props> = () => {
  const { colors, styles } = useIndex();

  const navigation = useNavigation();
  return (
    <View style={styles.mainWrapper}>
      <Button
        mode="filled"
        text="goooo"
        onPress={() => navigation.navigate("ProfileScreen")}
      />
    </View>
  );
};

export default Settings;
