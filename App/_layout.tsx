import { Stack } from "expo-router";
import "../global.css";
import { View } from "react-native";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      <Stack>{children}</Stack>
    </View>
  );
}
