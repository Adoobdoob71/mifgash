import { FC } from "react";
import { Image, View } from "react-native";
import useIndex from "./useIndex";
import IconButton from "../../../../components/IconButton";
import { BASE_SIZE } from "../../../../utils/constants";

interface Props {}

const Header: FC<Props> = () => {
  const { colors, navigation, styles } = useIndex();
  return (
    <View style={styles.mifgashHeader}>
      <Image
        src="https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1-500x500.jpg"
        style={styles.mifgashImage}
        resizeMode="cover"
      />
      <View style={styles.mifgashHeaderButtons}>
        <IconButton
          iconName="close"
          onPress={() => navigation.goBack()}
          aura
          size={9.5 * BASE_SIZE}
        />
        <IconButton
          // @ts-ignore
          iconName="fa-regular fa-bookmark"
          onPress={() => {}}
          style={{ marginStart: "auto" }}
          aura
          size={9.5 * BASE_SIZE}
        />
      </View>
      <View
        style={{
          height: 8 * BASE_SIZE,
          backgroundColor: colors.backgroundColor,
          marginTop: "auto",
          width: "100%",
          borderTopStartRadius: 8 * BASE_SIZE,
          borderTopEndRadius: 8 * BASE_SIZE,
        }}></View>
    </View>
  );
};

export default Header;
