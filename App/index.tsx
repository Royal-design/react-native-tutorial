import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  return (
    <View className="flex-1 bg-slate-400 justify-center items-center">
      <Text className="font-bold text-lg text-center text-white">
        Welcome to Home page
      </Text>
      <Link
        href="/about"
        className="rounded-md bg-blue-400 text-white px-4 py-2 mt-2"
      >
        About Me
      </Link>
    </View>
  );
}
