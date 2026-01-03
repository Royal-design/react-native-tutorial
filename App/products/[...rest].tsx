import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CatchRoute() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();
  return (
    <SafeAreaView>
      <Text>Catch all route</Text>
      <Text>Details about product as {rest.join("/")}</Text>
    </SafeAreaView>
  );
}
