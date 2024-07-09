import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import "./src/utils/icons";
import { useThemeStore } from "./src/zustand/theme";

const App: FC = () => {
  const theme = useThemeStore();
  return (
    <NavigationContainer
      theme={{
        dark: theme.dark,
        colors: {
          background: theme.colors.backgroundColor,
          border: theme.colors.border,
          card: theme.colors.cardColor,
          notification: theme.colors.accent,
          primary: theme.colors.primary,
          text: theme.colors.text,
        },
      }}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
