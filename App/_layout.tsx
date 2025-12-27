import { Stack } from "expo-router";
import "../global.css";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Stack screenOptions={{ headerShown: false }}>{children}</Stack>
      <StatusBar style="auto" />
    </View>
  );
}
