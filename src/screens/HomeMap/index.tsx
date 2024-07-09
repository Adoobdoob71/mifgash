import { FC } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import useIndex from "./useIndex";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SharedValue } from "react-native-reanimated";

interface Props {
  bottomTabY: SharedValue<number>;
}

const HomeMap: FC<Props> = ({ bottomTabY }) => {
  const { styles, dark, colors, searchSheetRef, searchTextInputRef } =
    useIndex();

  return (
    <BottomSheetModalProvider>
      <View style={styles.mainWrapper}>
        <MapView
          initialRegion={{
            latitude: 32.0852997,
            longitude: 34.7818064,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation
          loadingBackgroundColor={colors.backgroundColor}
          loadingIndicatorColor={colors.primary}
          showsPointsOfInterest={false}
          mapType="mutedStandard"
          userInterfaceStyle={dark ? "dark" : "light"}
          style={styles.mapView}>
          <Header
            searchSheetRef={searchSheetRef}
            searchTextInputRef={searchTextInputRef}
          />
          <Bottom
            searchSheetRef={searchSheetRef}
            bottomTabY={bottomTabY}
            searchTextInputRef={searchTextInputRef}
          />
        </MapView>
      </View>
    </BottomSheetModalProvider>
  );
};

export default HomeMap;
