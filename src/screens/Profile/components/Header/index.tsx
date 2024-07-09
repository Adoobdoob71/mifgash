import { FC } from "react";
import { Image, View } from "react-native";
import IconButton from "../../../../components/IconButton";
import useIndex from "./useIndex";
import { BASE_SIZE } from "../../../../utils/constants";
import { BlurView } from "@react-native-community/blur";
import ImageBlur from "../../../../components/ImageBlur";

interface Props {}

const Header: FC<Props> = () => {
  const { styles, navigation, colors } = useIndex();

  return (
    <View style={styles.profileHeader}>
      <Image
        src="https://www.americanrivers.org/wp-content/uploads/2021/10/36416802923_f2a4c89a1d_b-1.jpeg"
        style={styles.profileBackgroundImage}
        resizeMode="cover"
      />
      <View style={styles.profileHeaderButtons}>
        <IconButton
          iconName="close"
          onPress={() => navigation.goBack()}
          aura
          size={9.5 * BASE_SIZE}
        />
        <IconButton
          // @ts-ignore
          iconName="edit"
          onPress={() => {}}
          style={{ marginStart: "auto" }}
          aura
          size={9.5 * BASE_SIZE}
        />
      </View>
      <ImageBlur
        uri="https://thispersondoesnotexist.com"
        style={styles.profileImage}
        outerStyle={styles.profileImageWrapper}
      />
      <View style={styles.profileHeaderFooter}></View>
    </View>
  );
};

export default Header;
