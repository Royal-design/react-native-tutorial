import { Stack } from "expo-router";
import "../global.css";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <Stack>{children}</Stack>
      <StatusBar style="auto" />
    </View>
  );
}
