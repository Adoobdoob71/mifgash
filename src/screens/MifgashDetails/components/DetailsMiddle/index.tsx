import { FC } from "react";
import { Text, View } from "react-native";
import useIndex from "./useIndex";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BASE_SIZE } from "../../../../utils/constants";
import IconButton from "../../../../components/IconButton";

const DetailsMiddle: FC = () => {
  const { colors, openInMaps, styles } = useIndex();

  return (
    <View style={styles.mifgashTimeAndPlaceWrapper}>
      <View style={styles.mifgashTPDetails}>
        <View style={styles.mifgashTPDetailsIcon}>
          <FontAwesomeIcon
            // @ts-ignore
            icon="fa-regular fa-clock"
            color={colors.primary}
            size={11 * BASE_SIZE}
          />
        </View>
        <View style={styles.mifgashTPDetailsTextWrapper}>
          <Text style={styles.mifgashText}>June 30, 2024</Text>
          <Text
            style={[
              styles.mifgashText,
              {
                color: colors.text,
                fontWeight: "bold",
                marginTop: 2 * BASE_SIZE,
              },
            ]}>
            19:00 - 21:30
          </Text>
        </View>
        <IconButton
          // @ts-ignore
          iconName="calendar-plus"
          onPress={() => {}}
          color={colors.primary}
          size={10 * BASE_SIZE}
        />
      </View>
      <View style={[styles.mifgashTPDetails, { marginTop: 8 * BASE_SIZE }]}>
        <View style={styles.mifgashTPDetailsIcon}>
          <FontAwesomeIcon
            // @ts-ignore
            icon="map-pin"
            color={colors.primary}
            size={11 * BASE_SIZE}
          />
        </View>
        <View style={styles.mifgashTPDetailsTextWrapper}>
          <Text style={styles.mifgashText}>Tel Aviv, Israel</Text>
          <Text
            style={[
              styles.mifgashText,
              {
                color: colors.text,
                fontWeight: "bold",
                marginTop: 2 * BASE_SIZE,
              },
            ]}>
            Expo Convention Center
          </Text>
        </View>
        <IconButton
          iconName="diamond-turn-right"
          onPress={() => openInMaps(32.1054141, 34.8084223)}
          color={colors.primary}
          size={10 * BASE_SIZE}
        />
      </View>
      <View style={[styles.mifgashTPDetails, { marginTop: 8 * BASE_SIZE }]}>
        <View style={styles.mifgashTPDetailsIcon}>
          <FontAwesomeIcon
            // @ts-ignore
            icon="toolbox"
            color={colors.primary}
            size={11 * BASE_SIZE}
          />
        </View>
        <View style={styles.mifgashTPDetailsTextWrapper}>
          <Text style={styles.mifgashText}>What should I bring?</Text>
          <Text
            style={[
              styles.mifgashText,
              {
                color: colors.text,
                fontWeight: "bold",
                marginTop: 2 * BASE_SIZE,
              },
            ]}>
            Yourself!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsMiddle;
