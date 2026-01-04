import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <Text>Login</Text>

      <TouchableOpacity
        onPress={() => router.push("/signup")}
        className="bg-blue-500 py-2 rounded-md px-4 mt-2"
      >
        <Text className="text-white">Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
