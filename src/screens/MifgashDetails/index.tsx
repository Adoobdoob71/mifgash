import { FC } from "react";
import { Text, View } from "react-native";
import useIndex from "./useIndex";
import { BASE_SIZE, SCREEN_WIDTH } from "../../utils/constants";
import Button from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./components/Header";
import DetailsTop from "./components/DetailsTop";
import DetailsMiddle from "./components/DetailsMiddle";
import DetailsBottom from "./components/DetailsBottom";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import LottieView from "lottie-react-native";
import Description from "./components/Description";

const MifgashDetails: FC = () => {
  const {
    styles,
    bottomSheetRef,
    animationRef,
    openSuccessfulJoinSheet,
    onClose,
  } = useIndex();

  return (
    <View style={styles.mainWrapper}>
      <Header />
      <ScrollView style={styles.mifgashDetails}>
        <DetailsTop />
        <Description shortDescription="We're gonna go to Vitrina in Tel Aviv to eat some mighty burgers!" />
        <DetailsMiddle />
        <DetailsBottom />
      </ScrollView>
      <Button
        mode="filled"
        // @ts-ignore
        onPress={openSuccessfulJoinSheet}
        text="Count me in!"
        fontSize={10 * BASE_SIZE}
        style={styles.mifgashJoinButton}
      />
      <BottomSheet
        ref={bottomSheetRef}
        handleIndicatorStyle={styles.mifgashSuccessfulJoinHandle}
        backgroundStyle={styles.mifgashSuccessfulJoinSheet}
        onClose={onClose}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
          />
        )}
        index={-1}
        snapPoints={["30%"]}
        enablePanDownToClose>
        <View style={styles.mifgashSuccessfulJoin}>
          <LottieView
            ref={animationRef}
            source={require("../../../assets/joinedMifgash.json")}
            style={{
              marginBottom: 10 * BASE_SIZE,
            }}
            loop
          />
          <Text style={styles.mifgashSuccessfulJoinText}>
            Great! We'll see you there
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default MifgashDetails;
