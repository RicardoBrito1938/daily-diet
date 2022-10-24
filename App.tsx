import Routes from "./src/routes";
import { NativeBaseProvider, StatusBar } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Routes />
    </NativeBaseProvider>
  );
}
