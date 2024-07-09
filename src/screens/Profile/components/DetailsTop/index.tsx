import { FC } from "react";
import { Image, Text, View } from "react-native";
import useIndex from "./useIndex";
import Button from "../../../../components/Button";
import { BASE_SIZE } from "../../../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Tag from "../../../../components/Tag";

interface Props {}

const DetailsTop: FC<Props> = () => {
  const { colors, styles } = useIndex();

  return (
    <View style={styles.profileTopWrapper}>
      <View style={styles.profileTopTitleWrapper}>
        <Text style={styles.profileTopName}>Russell Westbrook</Text>
        <Text style={styles.profileTopLocation}>📍 Tel Aviv, Israel</Text>
        <View style={styles.profileTopStats}>
          <View style={styles.profileTopStatWrapper}>
            <Text
              style={[
                styles.profileTopStatsText,
                { color: colors.secondaryText },
              ]}>
              76{" "}
            </Text>
            <Text style={styles.profileTopStatsText}>Connections</Text>
          </View>
          <View style={styles.profileTopStatWrapper}>
            <Text
              style={[
                styles.profileTopStatsText,
                { color: colors.secondaryText },
              ]}>
              4{" "}
            </Text>
            <Text style={styles.profileTopStatsText}>Attendences</Text>
          </View>
        </View>
        <View style={styles.profileHobbiesWrapper}>
          <Tag
            text="🏀 Basketball"
            style={{
              marginEnd: 3 * BASE_SIZE,
              backgroundColor: colors.cardColor,
            }}
          />
          <Tag
            text="🎨 Drawing"
            style={{
              marginEnd: 3 * BASE_SIZE,
              backgroundColor: colors.cardColor,
            }}
          />
          <Tag
            text="🏊 Swimming"
            style={{
              backgroundColor: colors.cardColor,
            }}
          />
        </View>
      </View>
      <Button
        mode="filled"
        text="Connect"
        fontSize={8 * BASE_SIZE}
        onPress={() => {}}
        icon="user-group"
        style={styles.profileConnectButton}
      />
    </View>
  );
};

export default DetailsTop;
