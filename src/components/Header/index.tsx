import { Avatar, HStack, Image } from "native-base";
import logo from "../../../assets/logo/Logo.png";

export const Header = () => {
  return (
    <HStack justifyContent="space-between">
      <Image source={logo} alt="logo" />
      <Avatar
        source={{
          uri: "https://avatars.githubusercontent.com/u/51454097?s=96&v=4"
        }}
      />
    </HStack>
  );
};
