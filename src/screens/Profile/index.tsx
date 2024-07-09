import { FC } from "react";
import { ScrollView, View } from "react-native";
import useIndex from "./useIndex";
import Header from "./components/Header";
import DetailsTop from "./components/DetailsTop";
import DetailsMiddle from "./components/DetailsMiddle";

const Profile: FC = () => {
  const { colors, dark, styles } = useIndex();

  return (
    <View style={styles.mainWrapper}>
      <Header />
      <DetailsTop />
      <ScrollView style={styles.profileDetails}>
        <DetailsMiddle />
      </ScrollView>
    </View>
  );
};

export default Profile;
