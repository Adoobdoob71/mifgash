import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import {
  useNavigationBuilder,
  TabRouter,
  DefaultNavigatorOptions,
  ParamListBase,
  TabNavigationState,
  TabRouterOptions,
  TabActionHelpers,
  createNavigatorFactory,
} from "@react-navigation/native";
import { FC } from "react";
import TabBar from "../TabBar";
import { SharedValue } from "react-native-reanimated";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// LOTS OF BOILERPLATE CODE FOR THE CUSTOM NAVIGATOR
type TabNavigationConfig = {
  tabBarStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

type TabNavigationOptions = {
  title?: string;
};

type TabNavigationEventMap = {
  tabPress: {
    data: { isAlreadyFocused: boolean };
    canPreventDefault: true;
  };
};

interface Props
  extends DefaultNavigatorOptions<
      ParamListBase,
      TabNavigationState<ParamListBase>,
      TabNavigationOptions,
      TabNavigationEventMap
    >,
    TabRouterOptions,
    TabNavigationConfig {
  // BOILERPLATE CODE ENDS HERE
  bottomTabY: SharedValue<number>;
}

const BottomTabNavigator: FC<Props> = ({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
  bottomTabY,
}) => {
  // MORE BOILERPLATE
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder<
      TabNavigationState<ParamListBase>,
      TabRouterOptions,
      TabActionHelpers<ParamListBase>,
      TabNavigationOptions,
      TabNavigationEventMap
    >(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return (
    <NavigationContent>
      <View style={[{ flex: 1 }, contentStyle]}>
        {state.routes.map((route, i) => {
          return (
            <View
              key={route.key}
              style={[
                StyleSheet.absoluteFill,
                { display: i === state.index ? "flex" : "none" },
              ]}>
              {descriptors[route.key].render()}
            </View>
          );
        })}
        {/* right bellow is the tab component */}
        <TabBar
          state={state}
          navigation={navigation}
          // @ts-ignore
          descriptors={descriptors}
          bottomTabY={bottomTabY}
        />
      </View>
    </NavigationContent>
  );
};

export default createNavigatorFactory(BottomTabNavigator);
