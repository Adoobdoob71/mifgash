import HomeMap from "../../screens/HomeMap";
import { useThemeStore } from "../../zustand/theme";
import { SharedValue } from "react-native-reanimated";
import { FC } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import Settings from "../../screens/Settings";

const BottomTab = BottomTabNavigator();

interface Props {
  bottomTabY: SharedValue<number>;
}

const BottomNavigator: FC<Props> = ({ bottomTabY }) => {
  const { colors } = useThemeStore();

  const HomeMapComponent = () => <HomeMap bottomTabY={bottomTabY} />;
  const SettingsComponent = () => <Settings />;

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      bottomTabY={bottomTabY}>
      <BottomTab.Screen
        name="Home"
        component={HomeMapComponent}
        initialParams={{ icon: "map" }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsComponent}
        initialParams={{ icon: "gear" }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigator;
