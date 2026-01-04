import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, Stack } from "expo-router";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-red-500 py-2">
        <Text className="text-center">SafeAreaView</Text>
      </View>
      <Slot />
    </SafeAreaView>
  );
}
