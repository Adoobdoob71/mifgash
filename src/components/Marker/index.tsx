import { FC } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useThemeStore } from "../../zustand/theme";
import { BASE_SIZE } from "../../utils/constants";
import { LatLng } from "react-native-maps";
import { Marker as MarkerRNM } from "react-native-maps";
interface Props {
  color?: string;
  coordinate: LatLng;
  style?: StyleProp<ViewStyle>;
}

const Marker: FC<Props> = ({ coordinate, color, style }) => {
  const { colors } = useThemeStore();

  const styles = StyleSheet.create({
    markerWrapper: {
      width: 12 * BASE_SIZE,
      height: 12 * BASE_SIZE,
      backgroundColor: colors.primary,
      borderRadius: 6 * BASE_SIZE,
      borderWidth: 2 * BASE_SIZE,
      borderColor: colors.cardColor,
    },
  });

  return (
    <MarkerRNM
      coordinate={coordinate}
      style={[
        style,
        {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
      ]}>
      <View style={styles.markerWrapper}></View>
    </MarkerRNM>
  );
};

export default Marker;
