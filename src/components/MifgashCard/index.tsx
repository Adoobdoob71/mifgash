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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BASE_SIZE } from "../../utils/constants";
import ImageBlur from "../ImageBlur";
import Tag from "../Tag";

interface Props {
  title: string;
  time: string;
  category: string;
  onPress: () => void;
  group: string;
  location: string;
  categories: string[];
  style?: StyleProp<ViewStyle>;
}

const MifgashCard: FC<Props> = ({
  title,
  time,
  category,
  onPress,
  style,
  group,
  location,
  categories,
}) => {
  const { colors, styles, bookmarked, going, toggleBookmark } = useIndex();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.mifgashCardWrapper,
        { opacity: pressed ? 0.65 : 1 },
        style,
      ]}
      onPress={onPress}>
      <Image
        src="https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1-500x500.jpg"
        style={styles.mifgashCardBackgroundImage}
        resizeMode="cover"
      />
      <View style={styles.mifgashCardInfoWrapper}>
        <View style={styles.mifgashCardHeader}>
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              styles.mifgashGroupWrapper,
              { opacity: pressed ? 0.5 : 1 },
            ]}>
            <ImageBlur
              uri="https://www.otterspecialistgroup.org/osg-newsite/wp-content/uploads/2017/04/ThinkstockPhotos-827261360.jpg"
              style={styles.mifgashGroupImage}
            />
            <Text style={styles.mifgashGroupName}>{group}</Text>
          </Pressable>
        </View>
        <View style={styles.mifgashCardMiddle}>
          <Text style={styles.mifgashCardTitle}>{title}</Text>
          <Text
            style={styles.mifgashCardShortDesc}
            numberOfLines={2}
            ellipsizeMode="tail">
            We're gonna go to Vitrina in Tel Aviv to eat some mighty burgers and
            fries
          </Text>
          <View style={styles.mifgashCardAvatars}>
            {[1, 2, 3].map(item => (
              <ImageBlur
                uri="https://thispersondoesnotexist.com"
                key={item}
                style={styles.goingAvatar}
                outerStyle={{
                  marginEnd: -2 * BASE_SIZE,
                }}
              />
            ))}
            <Text style={styles.mifgashCardGoingNumber}>43 People going</Text>
          </View>
        </View>
        <View style={styles.mifgashCardFooter}>
          <View style={styles.mifgashCardFooterDetails}>
            <View style={styles.mifgashCardLocationWrapper}>
              <FontAwesomeIcon
                icon="map-pin"
                size={9 * BASE_SIZE}
                color={colors.onTransparentBackground}
              />
              <Text style={styles.mifgashCardLocation}>{location}</Text>
            </View>
            <View style={styles.mifgashCardTimeWrapper}>
              <FontAwesomeIcon
                // @ts-ignore
                icon="fa-regular fa-clock"
                size={9 * BASE_SIZE}
                color={colors.onTransparentBackground}
              />
              <Text style={styles.mifgashCardTime}>{time}</Text>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={styles.mifgashCardTagList}
            showsHorizontalScrollIndicator={false}
            horizontal>
            <View style={{ width: 6 * BASE_SIZE }}></View>
            {categories.map((item, index) => (
              <Tag
                text={item}
                key={index}
                textStyle={{ color: colors.text, fontWeight: "bold" }}
                style={{
                  marginEnd: 4 * BASE_SIZE,
                  backgroundColor: colors.cardColor,
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

export default MifgashCard;
