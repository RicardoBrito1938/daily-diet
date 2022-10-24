import { VStack, Text, Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/logo/Logo.png";

const Dashboard = () => {
  return (
    <VStack flex={1} p={6}>
      <Image source={logo} alt="logo" />
      <Text>Dashboard</Text>
    </VStack>
  );
};

export default Dashboard;
