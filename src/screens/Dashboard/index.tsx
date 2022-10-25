import {
  AddIcon,
  ArrowUpIcon,
  Button,
  Heading,
  Pressable,
  Text,
  VStack
} from "native-base";
import { Header } from "../../components/Header";

const Dashboard = () => {
  return (
    <VStack flex={1} p={6} bg="gray.300" safeArea>
      <Header />
      <Pressable my={6}>
        <VStack bg="#E5F0DB" alignItems="center" py={5} borderRadius={12}>
          <ArrowUpIcon
            position="absolute"
            size={6}
            right={2}
            top={2}
            transform={[{ rotate: "45deg" }]}
            color="#639339"
          />

          <Heading>90,86%</Heading>
          <Text color="#333638">Meals inside the diet</Text>
        </VStack>
      </Pressable>
      <Text mb={3}>Meals</Text>
      <Button
        size="lg"
        bg="#333638"
        leftIcon={<AddIcon size={3} color="white" />}
      >
        New meal
      </Button>
    </VStack>
  );
};

export default Dashboard;
