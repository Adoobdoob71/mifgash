import { FC } from "react";
import { Image, Text, View } from "react-native";
import useIndex from "./useIndex";
import Button from "../../../../components/Button";
import { BASE_SIZE } from "../../../../utils/constants";

const DetailsTop: FC = () => {
  const { styles, colors } = useIndex();

  return (
    <View>
      <View style={styles.mifgashTitleWrapper}>
        <View style={styles.mifgashTitleDetails}>
          <Text style={styles.mifgashTitle}>Burger with friends!</Text>
          <View style={styles.mifgashHostWrapper}>
            <Image
              src="https://api.dicebear.com/9.x/big-ears-neutral/jpg?randomizeIds=true"
              style={styles.mifgashHostImage}
              resizeMode="cover"
            />
            <Text style={styles.mifgashHostName}>Russell Westbrook ·</Text>
            <Button
              mode="text"
              fontSize={8 * BASE_SIZE}
              icon="user-group"
              onPress={() => {}}
              text="Connect"
            />
          </View>
        </View>
      </View>
      <View style={styles.mifgashGoingWrapper}>
        <View style={styles.mifgashGoingDetailsWrapper}>
          <View style={styles.mifgashAllGoingWrapper}>
            <Text
              style={[
                styles.mifgashText,
                { fontWeight: "bold", color: colors.text },
              ]}>
              12
            </Text>
            <Text style={styles.mifgashText}>People are going</Text>

            <View style={styles.mifgashAllGoingAvatars}>
              {[1, 2, 3].map(item => (
                <Image
                  style={styles.goingAvatar}
                  key={item}
                  src="https://thispersondoesnotexist.com"
                />
              ))}
            </View>
          </View>
          <View style={styles.mifgashGoingYouKnowWrapper}>
            <Text style={styles.mifgashText}>You know</Text>
            <Text
              style={[
                styles.mifgashText,
                { color: colors.text, fontWeight: "bold" },
              ]}>
              3
            </Text>
            <Text style={styles.mifgashText}>of those people</Text>
          </View>
        </View>
        <Button mode="filled" onPress={() => {}} text="View all" />
      </View>
    </View>
  );
};

export default DetailsTop;
