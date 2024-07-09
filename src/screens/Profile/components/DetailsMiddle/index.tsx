import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import useIndex from "./useIndex";
import { BASE_SIZE } from "../../../../utils/constants";
import GroupCard from "../../../../components/GroupCard";
import MifgashCard from "../../../../components/MifgashCard";

interface Props {}

const DetailsMiddle: FC<Props> = () => {
  const { styles, colors } = useIndex();

  return (
    <View style={styles.profileMiddleWrapper}>
      <View style={styles.profileGroupsWrapper}>
        <Text style={styles.profileGroupsTitle}>Groups they're in</Text>
        <ScrollView
          contentContainerStyle={styles.profileGroupsList}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
          horizontal>
          <View style={{ width: 12 * BASE_SIZE }}></View>
          {[1, 2, 3, 4].map((item, index) => (
            <GroupCard
              groupName="React Native Israel"
              onPress={() => {}}
              key={index}
              categories={["💻 Programming", "📱 Mobile Dev", "🍻 Fun"]}
              style={{ marginEnd: 8 * BASE_SIZE }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.profilePastMifgashimWrapper}>
        <Text style={styles.profilePastMifgashimTitle}>
          Past Mifgashim attended
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.profilePastMifgashimList}
          horizontal>
          <View style={{ width: 12 * BASE_SIZE }}></View>
          {/* {[1, 2, 3, 4].map((item, index) => (
            <MifgashCard
              onPress={() => {}}
              time="26th June · 7PM"
              title="Burger with friends!"
              category="Food & Drinks"
              style={{ marginEnd: 8 * BASE_SIZE }}
            />
          ))} */}
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsMiddle;
