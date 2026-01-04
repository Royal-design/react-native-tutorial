import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <Text>Sign Up PAGE</Text>

      <TouchableOpacity
        className="py-2 px-4 bg-blue-500"
        onPress={() => router.push("/signup")}
      >
        <Text className="text-white">Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
