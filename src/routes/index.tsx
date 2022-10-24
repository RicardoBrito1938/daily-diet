import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Dashboard from "../screens/Dashboard";

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Dashboard" component={Dashboard} />
        </Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Routes;
