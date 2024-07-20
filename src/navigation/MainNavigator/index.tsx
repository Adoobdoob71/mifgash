import { createStackNavigator } from "@react-navigation/stack";
import useIndex from "./useIndex";
import BottomNavigator from "../BottomNavigator";
import MifgashDetails from "../../screens/MifgashDetails";
import Profile from "../../screens/Profile";

const Stack = createStackNavigator();

export default function MainNavigator() {
  const { bottomTabY, colors } = useIndex();

  const BottomNavigatorComponent = () => (
    <BottomNavigator bottomTabY={bottomTabY} />
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigatorComponent}
      />
      <Stack.Screen name="MifgashDetails" component={MifgashDetails} />
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
}
