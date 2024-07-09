import { FC } from "react";
import {
  Pressable as Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Animated from "react-native-reanimated";
import useIndex from "./useIndex";
import { BASE_SIZE } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type Stage = {
  title: string;
  description: string;
  time?: string;
};

interface Props {
  stages: Stage[];
  style?: StyleProp<ViewStyle>;
}

const Plan: FC<Props> = ({ stages, style }) => {
  const { colors, styles, activeStageIndex, updateActiveStage } = useIndex();

  return (
    <View style={[styles.planWrapper, style]}>
      {stages.map((item, index) => (
        <View style={styles.stageWrapper}>
          <View style={styles.stageDotWrapper}>
            <View
              style={[
                styles.stageDot,
                {
                  backgroundColor:
                    activeStageIndex === index
                      ? colors.primary
                      : colors.cardColor,
                },
              ]}></View>
          </View>
          <Pressable
            onPress={() => updateActiveStage(index)}
            style={({ pressed }) => [
              {
                flex: 1,
                opacity: pressed ? 0.75 : 1,
              },
            ]}>
            <Animated.View style={styles.stageCardWrapper}>
              <View style={styles.stageInfoWrapper}>
                <View style={styles.stageInfoTitleTimeWrapper}>
                  <Text style={styles.stageInfoTitle}>{item.title}</Text>
                  <Text style={styles.stageInfoTime}>{item.time}</Text>
                </View>
                <Animated.Text
                  style={styles.stageInfoDescription}
                  numberOfLines={activeStageIndex === index ? undefined : 1}
                  ellipsizeMode="tail">
                  {item.description}
                </Animated.Text>
              </View>
              <FontAwesomeIcon
                icon={
                  activeStageIndex === index ? "chevron-up" : "chevron-down"
                }
                color={colors.text}
                size={8 * BASE_SIZE}
                style={{ marginEnd: 8 * BASE_SIZE }}
              />
            </Animated.View>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default Plan;
