import { FC } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import useIndex from "./useIndex";
import Tag from "../Tag";
import { BASE_SIZE } from "../../utils/constants";
import ImageBlur from "../ImageBlur";

interface Props {
  onPress: () => void;
  groupName: string;
  categories: string[];
  style?: StyleProp<ViewStyle>;
}

const GroupCard: FC<Props> = ({ groupName, onPress, categories, style }) => {
  const { styles, colors } = useIndex();

  return (
    <Pressable style={[styles.groupCardWrapper, style]}>
      <Image
        src="https://cdn.prod.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg"
        style={styles.groupCardBackgroundImage}
        resizeMode="cover"
      />
      <View style={styles.groupCardInfoWrapper}>
        <View style={styles.groupCardTop}>
          <Text style={styles.groupCardName}>{groupName}</Text>
        </View>
        <View style={styles.groupCardBottom}>
          <View style={styles.groupCardMembers}>
            <View style={styles.groupCardMembersImageWrapper}>
              {[1, 2, 3].map(item => (
                <ImageBlur
                  uri="https://thispersondoesnotexist.com"
                  key={item}
                  style={styles.groupCardMembersImage}
                  outerStyle={{
                    marginEnd: -2.25 * BASE_SIZE,
                  }}
                />
              ))}
            </View>
            <Text style={styles.groupCardMembersText}>438 Members</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.groupCardTagList}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {categories.map((item, index) => (
              <Tag
                text={item}
                key={index}
                style={{
                  marginEnd: 4 * BASE_SIZE,
                  backgroundColor: colors.backgroundColor,
                  borderWidth: 0,
                }}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Pressable>
  );
};

export default GroupCard;
