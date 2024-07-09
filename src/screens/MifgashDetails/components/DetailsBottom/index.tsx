import { FC } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import useIndex from "./useIndex";
import Marker from "../../../../components/Marker";

const DetailsBottom: FC = () => {
  const { colors, dark, openInMaps, styles } = useIndex();

  return (
    <View style={styles.mifgashPlace}>
      <Text style={styles.mifgashPlaceTitle}>It's right there:</Text>
      <MapView
        showsMyLocationButton={false}
        initialRegion={{
          latitude: 32.1054141,
          longitude: 34.8084223,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        onPress={() => openInMaps(32.1054141, 34.8084223)}
        mapType="mutedStandard"
        showsPointsOfInterest={false}
        cameraZoomRange={{ minCenterCoordinateDistance: 5 }}
        userInterfaceStyle={dark ? "dark" : "light"}
        loadingIndicatorColor={colors.primary}
        loadingBackgroundColor={colors.backgroundColor}
        tintColor={colors.primary}
        style={styles.mifgashMap}
        scrollEnabled={false}
        zoomEnabled={false}
        liteMode>
        <Marker coordinate={{ latitude: 32.1054141, longitude: 34.8084223 }} />
      </MapView>
    </View>
  );
};

export default DetailsBottom;
