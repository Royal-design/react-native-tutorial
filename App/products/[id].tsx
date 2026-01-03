import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Text>Product {id}</Text>
      </View>
    </SafeAreaView>
  );
}
