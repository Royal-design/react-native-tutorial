import { Text } from "react-native";

export const Greet = ({ name }: { name: string }) => {
  return <Text className="text-center">Hello {name}</Text>;
};
