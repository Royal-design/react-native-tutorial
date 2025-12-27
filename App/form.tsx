// app/about.tsx
import { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutPage() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView className="flex-1 p-4">
      <Text className="text-2xl text-center my-4">
        Hello, {name || "Guest"}!
      </Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCorrect={false}
        autoCapitalize="words"
        className="border border-green-400 rounded-md py-2"
      />
      <TextInput
        className="border border-green-400 rounded-md mt-4 py-2"
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        className="border min-h-24 border-green-400 rounded-md mt-4 py-2"
        placeholder="bio"
        multiline
        style={{ textAlignVertical: "top" }}
      />
      <View className="flex-row items-center justify-between">
        <Text className="text-lg mt-4 mb-2">Set Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: "grey", true: "black" }}
          thumbColor={isDarkMode ? "white" : "lightgrey"}
        />
      </View>
    </SafeAreaView>
  );
}
