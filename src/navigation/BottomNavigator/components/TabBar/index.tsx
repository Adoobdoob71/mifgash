import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { Pressable, View } from "react-native";
import useIndex from "./useIndex";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BASE_SIZE } from "../../../../utils/constants";
import Animated, { SharedValue } from "react-native-reanimated";

interface Props extends BottomTabBarProps {
  bottomTabY: SharedValue<number>;
}

const TabBar: FC<Props> = ({
  state,
  descriptors,
  insets,
  navigation,
  bottomTabY,
}) => {
  const { colors, styles } = useIndex();

  return (
    <Animated.View
      style={[
        styles.tabBarWrapper,
        { transform: [{ translateY: bottomTabY }] },
      ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return (
          <Pressable
            onPress={onPress}
            key={index}
            style={({ pressed }) => [
              styles.tabBarButton,
              isFocused && styles.tabBarShadow,
              {
                opacity: pressed ? 0.5 : 1,
                backgroundColor: isFocused ? colors.primary : "transparent",
                marginStart:
                  index !== 0
                    ? route.name === "Settings"
                      ? "auto"
                      : 6 * BASE_SIZE
                    : undefined,
              },
            ]}>
            <FontAwesomeIcon
              //@ts-ignore
              icon={route.params?.icon}
              color={isFocused ? colors.onPrimary : colors.text}
              size={12 * BASE_SIZE}
            />
          </Pressable>
        );
      })}
    </Animated.View>
  );
};

export default TabBar;
