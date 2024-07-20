import { FC, RefObject } from "react";
import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import useIndex from "./useIndex";
import { ActivityIndicator, Text, TextInput, View } from "react-native";
import IconButton from "../../../../components/IconButton";
import { BASE_SIZE } from "../../../../utils/constants";
import HMasonryList from "../HMasonryList";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { SharedValue } from "react-native-reanimated";
import MifgashCard from "../../../../components/MifgashCard";
import { useNavigation } from "@react-navigation/native";

interface Props {
  searchSheetRef: RefObject<BottomSheetModalMethods>;
  searchTextInputRef: RefObject<TextInput>;
  bottomTabY: SharedValue<number>;
}

const Bottom: FC<Props> = ({
  searchSheetRef,
  searchTextInputRef,
  bottomTabY,
}) => {
  const {
    loading,
    toggleTheme,
    searchSheetStages,
    styles,
    onAnimate,
    mifgashCardOnPress,
  } = useIndex(searchSheetRef, searchTextInputRef, bottomTabY);

  const navigation = useNavigation();

  return (
    <BottomSheetModal
      ref={searchSheetRef}
      index={0}
      handleComponent={() => (
        <View>
          <View style={styles.searchSheetHeader}>
            <Text style={styles.headerTitle}>Mifgash</Text>
            <IconButton
              iconName="sliders"
              onPress={() => {}}
              size={10 * BASE_SIZE}
              style={styles.filterButton}
            />
          </View>
          <HMasonryList
            data={[
              "sdfa",
              "assdfs",
              "vbasdfcv",
              "sfg",
              "cvbasf",
              "asasdfasddf",
              "weafsdr",
              "sfdg",
              "xvvc",
              "vbasdfcv",
              "sfg",
              "cvbasf",
              "xvvc",
              "safasdf",
              "basketball",
            ]}
            style={{ marginTop: 8 * BASE_SIZE }}
          />
        </View>
      )}
      enableOverDrag={false}
      enablePanDownToClose={false}
      enableDismissOnClose={false}
      onAnimate={onAnimate}
      backgroundStyle={styles.searchSheetWrapper}
      snapPoints={searchSheetStages}>
      <BottomSheetFlatList
        data={[1, 2, 3, 4]}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={styles.mifgashCardListContent}
        ListFooterComponent={<View style={{ height: 15 * BASE_SIZE }}></View>}
        renderItem={() => (
          <MifgashCard
            title="Burger with friends!"
            category="Food & Drinks"
            time="26th June · 7PM"
            group="Eating out"
            upcoming={true}
            categories={[
              "Food & Drinks",
              "Late night hangout",
              "Meeting friends",
            ]}
            location="Tel Aviv, Israel"
            style={{ marginTop: 8 * BASE_SIZE }}
            onPress={mifgashCardOnPress}
          />
        )}
        style={styles.mifgashCardList}
      />
    </BottomSheetModal>
  );
};

export default Bottom;
